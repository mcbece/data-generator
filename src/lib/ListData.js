import merge from "merge-options"
import { each } from "./util.js"

export class List {
    constructor(indexName) {
        this._indexName = indexName
    }
    items = []
    header = {}
    setHeader(...header) {
        this.header = merge(...header)
    }
    addItem(name, description, other = {}) {
        this.items.push({ name, description, ...other })
    }
    get export() {
        return [
            this.header,
            ...this.items
        ]
    }
}
