//import {assert} from 'assert';
import assert from 'assert';
import LinkedListNode from '../LinkedListNode.js'
import LinkedList from '../LinkedList.js'

describe('creation', function () {
  it('new node created with value hello', function () {
    let n = new LinkedListNode('hello');
    assert.equal(n.toString(), 'hello');
  });

  it('new empty list created', function () {
    let l = new LinkedList();
    assert.equal(l.count(), 0);
  });
});

describe('manipulation', function () {
  let l = null;

  beforeEach(function () {
    l = new LinkedList();
    l.append("hello");
    l.append("bye");
    l.append("salute");
  })

  it('clear list', function () {
    l.clear();
    assert.equal(l.count(), 0);
  });

  it('prepend 3 nodes to the list', function () {
    l.clear();
    assert.equal(l.count(), 0);

    l.prepend("hello");
    l.prepend("bye");
    l.prepend("salute");
    assert.equal(l.count(), 3);
    assert.equal(l._head._value, "salute");
  });

  it('append 3 nodes to the list', function () {

    assert.equal(l.count(), 3);
    assert.equal(l._head._value, "hello");
    assert.equal(l._tail._value, "salute");
  });

  it('delete first element', function () {
    let n = l.delete('hello');
    assert.equal(l.count(), 2);
    assert.equal(l._head._value, "bye");
    assert.equal(l._tail._value, "salute");
  });

  it('delete last element', function () {
    let n = l.delete('salute');
    assert.equal(l.count(), 2);
    assert.equal(l._head._value, "hello");
    assert.equal(l._tail._value, "bye");
  });
});