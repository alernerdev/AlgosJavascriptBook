export default class LinkedListNode {
    constructor(value, next = null) {
        this._value = value;
        this._next = next;
    }

    toString(callback) {
        return callback ? callback(this._value) : `${this._value}`;
    }
}

