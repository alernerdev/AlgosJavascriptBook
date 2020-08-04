import LinkedListNode from './LinkedListNode.js'

'use strict';

export default class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;       
    }

    count() {
        if (this._head === null)
            return 0;

        let count = 1;
        let node = this._head;
        while (node._next !== null) {
            count++;
            node = node._next;
        }


        return count;
    }

    prepend(value) {
        const node = new LinkedListNode(value, this._head);
        this._head = node;

        // if there is only 1 item in the list, set the tail
        if (this._tail === null)
            this._tail = node;

        // notice that node is now the head of the list
        return node;
    }

    append(value) {
        const node = new LinkedListNode(value);
        if (this._head === null) {
            this._head = node;
            this._tail = node;
            return node;
        }

        const curTail = this._tail;
        curTail._next = node;
        this._tail = node;

        return node;
    }

    delete(value) {
        if (!this._head)
            return null;

        let deletedNode = null;
        // special case for deleting the head of the list
        if (this._head._value === value) {
            deletedNode = this._head;
            this._head = this._head._next;
            if (this._head === null)
                this._tail = null;

            return deletedNode;
        }

        let currentNode = this._head;
        while (currentNode._next !== null) {
            if (currentNode._next._value !== value) {
                // keep crawling the list
                currentNode = currentNode._next;
                continue;
            }

            // at this point, currentNode.next is holding the value I am looking for
            // so save it
            deletedNode = currentNode._next;
            // cut out found node out of the chain
            currentNode._next = currentNode._next._next;

            if (deletedNode === this.tail)
                this.tail = currentNode._next;

            return deletedNode;
        }

        // if still here, this value was not found
        return null;
    }

    clear() {
        if (!this._head)
            return;

        let currentNode;
        while (this._head !== null) {
            currentNode = this._head;
            this._head = this._head._next;
            currentNode = null;
        }
        this.tail = null;
    }

    toString() {

    }
}