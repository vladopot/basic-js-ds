const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.Root = null;
  }

  root() {
    this.data = null;
    if (this.Root === null) {
      return null;
    }
    this.data = this.Root.value;
    console.log(this.data);
    return this;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.Root === null) {
      this.Root = newNode;
      return this;
    }
    let current = this.Root;
    while (current) {
      if (current.value === data) return undefined;
      if (data < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  has(data) {
    let current = this.Root;
    while (current) {
      if (current.value === data) {
        console.log(true);
        return true;
      }
      if (data < current.value) {
        if (current.left === null) {
          console.log(false);
          return false
        }
        current = current.left;
      } else {
        if (current.right === null) {
          console.log(false);
          return false;
        }
        current = current.right;
      }
    }
  }

  find(data) {
    if (this.Root === null) return null;
    let current = this.Root;
    this.data = null;
    this.node = null;
    while (current) {
      if (current.value === data) {
        this.data = current.value;
        this.node = current;
        return this;
      }
      if (data < current.value) {
        if (current.left === null) {
          return null;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          return null;
        }
        current = current.right;
      }
    }
  }

  remove(data) {
    this.removeNode(this.find(data).node, data);
  }

  removeNode(node, data) {
    if (node === null) return null;
    if (node.left === null && node.right === null) {
      node = null;
      return node;
    };
    if (node.left === null) {
      node = node.right;
      return node;
    }
    if (node.right  === null) {
      node = node.left;
      return node;
    }
    
      let min = this.min(node.right.value).node;
      node.value = min;
      node.right = this.removeNode(node.right, this.min(node.right.value).value);
      return node;
    
  }

  min(val) {
    this.value = null;
    this.node = null;
    if (this.Root === null) return null;
    let current;
    if (val === undefined) current = this.Root;
    if (val !== undefined) {
      current = this.find(val).node;
    };
    while (current) {
      if (current.left === null) {
        this.node = current;
        this.value = current.value;
        return current.value;
      }
      current = current.left;
    }
  }

  max() {
    if (this.Root === null) return null;
    let current = this.Root;
    while (current) {
      if (current.right === null) {
        console.log(current.value);
        return current.value;
      }
      current = current.right;
    }
  }
}

let tree = new BinarySearchTree();

tree.add(9);
tree.add(14);
tree.add(54);
tree.add(2);
tree.add(6);
tree.add(8);
tree.add(31);
tree.add(31);
tree.add(1);
tree.min(2);
tree.remove(9);

module.exports = {
  BinarySearchTree
};