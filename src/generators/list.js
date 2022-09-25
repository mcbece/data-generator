import fs from "fs"
import { each, objectGet } from "../lib/util.js"
import logger from "../lib/logger.js"
import { List } from "../lib/ListData.js"
import listMap from "../data/listMap.js"

const defHeader = {
    template: {
        input: {
            text: "{This: name} "
        }
    }
}

export default function(data, dest, _env) {
    const output = {}
    
    each(listMap, (listConfig, listName) => {
        if (!listConfig._position) return
        const _list = objectGet(data, listConfig._position, { strict: true })
        if (!_list) return logger.error("generateList", "Could not find list.", _env.lang, _env.version, _env.branch, listName)
        delete listConfig._position
        
        const list = new List(listName)
        list.setHeader(defHeader, listConfig, {
            name: listConfig.name || listName,
            minecraft_version: _env.minecraftVersion
        })
        
        each(_list, (description, name) => {
            list.addItem(name, description)
        })
        
        if (listName === "block" || listName === "item") Object.assign(output, getDataOf(_list, listName))
        else if (listName === "entity") Object.assign(output, getEntityEvent(_list, data))
        else if (listName === "enchantment") Object.assign(output, getEnchantmentLevel(_list, data))
        // animation
        // animation controller
        
        output[listName] = list.export
    })
    
    
    Object.assign(output, getCommandsList(data))
    Object.assign(output, getSelectorList(data))
    Object.assign(output, getValueListOf("coordinate", data))
    Object.assign(output, getValueListOf("rotation", data))
    
    
    
    logger.info("generator", "Generate completed!", "list", _env.lang, _env.version, _env.branch)
    
    fs.writeFileSync(`${dest}/list.json.js`, `export default ${JSON.stringify(output, null, 4)}`)
    return output
}

function getDataOf(_list, space) {
    const output = {}
    each(_list, (description, name) => {
        const indexName = `${space}.data.${name}`
        
        const list = new List(indexName)
        list.setHeader(defHeader)
        list.addItem("-1", description)
        each(description.split("/"), (desc, i) => {
            list.addItem(`${i}`, desc)
        })
        
        output[indexName] = list.export
    })
    return output
}

function getEntityEvent(_list, _data) {
    const entityEventsMap = _data.caidlist.data.entityEventsMap
    const entityEvent = _data.caidlist.common.entity_event  // TODO
    const output = {}
    each(_list, (_, entity) => {
        const indexName = `entity.event.${entity}`
        
        const list = new List(indexName)
        list.setHeader(defHeader)
        each(entityEventsMap, (includedEntity, name) => {
            if (includedEntity.includes(entity) || includedEntity.includes(`minecraft:${entity}`)) {
                list.addItem(name, entityEvent[name])
            }
        })
        
        const _export = list.export
        if (_export.length > 1) {
            output[indexName] = _export
        } else {
            list.addItem("", "该实体没有实体事件")
            output[indexName] = list.export
        }
    })
    return output
}

function getEnchantmentLevel(_list, _data) {
    const maxLevelMap = _data.local.list.enchantmentLevel
    const level = maxLevelMap._level
    const output = {}
    each(_list, (_, enchantment) => {
        const maxLevel = maxLevelMap[enchantment]
        const indexName = `enchantment.level.${enchantment}`
        const list = new List(indexName)
        list.setHeader(defHeader)
        for (let i = 1; i < maxLevel + 1; i++) {
            list.addItem(`${i}`, level[i])
        }
        output[indexName] = list.export
    })
    return output
}

function getCommandsList(_data) {
    const data = _data.local.list.commands
    const output = {}
    each(data, (partters, commandName) => {
        each(partters, (_list, partter) => {
            const indexName = `commands.${commandName}.${partter}`
            const list = new List(indexName)
            list.setHeader(_list.shift())
            each(_list, ({ name, description, ...other }) => {
                list.addItem(name, description, other)
            })
            output[indexName] = list.export
        })
    })
    return output
}

function getSelectorList(_data) {
    const data = _data.local.list.selector
    const output = {}
    each(data, (_list, partter) => {
        const indexName = `selector.${partter}`
        const list = new List(indexName)
        list.setHeader(_list.shift())
        each(_list, ({ name, description, value, ...other }) => {
            list.addItem(name, description, other)
            
            if (partter === "argument") {
                const _indexName = `selector.argument.value.${name}`
                const valueList = new List(_indexName)
                valueList.setHeader(value.shift())
                each(value, ({ _name, _description, ..._other }) => {
                    valueList.addItem(_name, _description, _other)
                })
                output[_indexName] = valueList.export
            }
        })
        output[indexName] = list.export
    })
    return output
}

function getValueListOf(space, _data) {
    const data = _data.local.list[space]
    const output = {}
    each(data, (_list, partter) => {
        const indexName = `${space}.${partter}`
        const header = _list.shift()
        const _indexName = `${space}.${partter}.value`
        const _valueList = header.value
        const valueList = new List(_indexName)
        valueList.setHeader(_valueList.shift())
        each(_valueList, ({ name, description, ...other }) => {
            valueList.addItem(name, description, other)
        })
        output[_indexName] = valueList.export
        
        const list = new List(indexName)
        list.setHeader(( delete header.value && header ))
        each(_list, ({ name, description, ...other }) => {
            list.addItem(name, description, other)
        })
        output[indexName] = list.export
    })
    return output
}
