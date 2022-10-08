export default {
    
    // game
    gamerule: {
        _position: "idlistweb.gamerule"
    },
    "gamerule.value.{gameruleName}": {
        // hard coded in generators/list.js
        // TODO
    },
    difficulty: {
        _position: "local.list.difficulty"
    },
    ability: {
        _position: "local.list.ability"
    },
    
    // commands
    command: {
        _position: "local.list.command",
        template: {
            url: "{Global: url.command_page}{This: name}",
            input: {
                replace: "all",
                text: "/{This: name} "
            }
        }
    },
    _command: {
        _position: "idlistweb.command"
    },
    "commands.{commandName}.{partter}": {
        // hard coded in generators/list.js
    },
    
    // selector, rotation and coordinate
    "selector.{...}": {
        // hard coded in generators/list.js
    },
    "coordinate.{...}": {
        // hard coded in generators/list.js
    },
    "rotation.{...}": {
        // hard coded in generators/list.js
    },
    
    // entities
    entity: {
        _position: "caidlist.common.entity",
        template: {
            url: "{Global: url.normal_page}{This: description}"
        }
    },
    "entity.event.{entityName}": {
        // hard coded in generators/list.js
    },
    "entity.summonable": {
        _position: "caidlist.common.summonable_entity",
        template: {
            url: "{Global: url.normal_page}{This: description}"
        }
    },
    "entity.family": {
        _position: "caidlist.common.entity_family"
    },
    "entity.slot": {
        _position: "caidlist.common.entity_slot"
    },
    
    // blocks
    block: {
        _position: "caidlist.common.block",
        template: {
            url: "{Global: url.normal_page}{This: description}"
        }
    },
    "block.data.{blockName}": {
        // hard coded in generators/list.js
    },
    
    // items
    item: {
        _position: "caidlist.common.item",
        template: {
            url: "{Global: url.normal_page}{This: description}"
        }
    },
    "item.data.{listName}": {
        // hard coded in generators/list.js
    },
    
    // particle emitter
    particle_emitter: {
        _position: "caidlist.common.particle_emitter"
    },
    
    // sound
    sound: {
        _position: "caidlist.common.sound"
    },
    music: {
        _position: "caidlist.common.music"
    },
    
    // animation
    animation: {
        _position: "caidlist.common.animation"
    },
    "animation.controller": {
        _position: "caidlist.common.animation_controller"
    },
    
    // effect
    effect: {
        _position: "caidlist.common.effect",
        template: {
            url: "{Global: url.normal_page}{This: description}"
        }
    },
    
    // enchantment
    enchantment: {
        _position: "caidlist.common.enchant_type",
        template: {
            url: "{Global: url.normal_page}{This: description}"
        }
    },
    
    // fog
    fog: {
        _position: "caidlist.common.fog"
    },
    
    // location and biome
    location: {
        _position: "caidlist.common.structure",
        template: {
            url: "{Global: url.normal_page}{This: description}"
        }
    },
    biome: {
        _position: "caidlist.common.biome",
        template: {
            url: "{Global: url.normal_page}{This: description}"
        }
    },
    
    // damage cause
    damage_cause: {
        _position: "caidlist.common.damage_cause"
    },
    
    // loot table
    "loot.tool": {
        _position: "caidlist.common.loot_tool"
    },
    "loot.table": {
        _position: "caidlist.common.loot_table"
    },
    "loot.table.wrapped": {
        _position: "caidlist.common.loot_table_wrapped"
    },
    
    // lang
    lang: {
        _position: "caidlist.lang"
    },
    
    // other
    next: {
        _position: "local.list.next",
        option: {
            searchable: false
        },
        template: {
            input: {
                replace: "none",
                text: " "
            }
        }
    },
    boolean: {
        _position: "local.list.boolean"
    }
}
