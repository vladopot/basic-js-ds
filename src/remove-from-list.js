const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

class list {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

class ListNode {
    constructor(x) {
      this.value = x;
      this.next = null;
  }
}

let newList = new list();

function convertArrayToList(arr) {
  let temp = null;
  arr.forEach(element => {
    let node = new ListNode(element);
    if (newList.head === null && newList.tail === null) {
      newList.head = node;
      newList.tail = node;
    }
    newList.tail.next = node;
    newList.tail = node;
  });
  console.log(newList);
}

function removeKFromList(l, k) {
  let i = 0;
  let done = false;
  while (i < l.length) {
    console.log(l.next);
    i++;
  }
  return l;
}

module.exports = {
  removeKFromList
};

let l = [3, 1, 2, 3, 4, 5];
let k = 3;

convertArrayToList(l);