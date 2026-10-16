
const { NotImplementedError } = require('../lib');
const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const newNode = new Node(data);

    if (this._root === null) {
      this._root = newNode;
      return this;
    }

    let current = this._root;

    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          break;
        }

        current = current.left;
      } else if (data > current.data) {
        if (current.right === null) {
          current.right = newNode;
          break;
        }

        current = current.right;
      } else {
        // Ignore duplicate values.
        break;
      }
    }

    return this;
  }

  find(data) {
    let current = this._root;

    while (current !== null) {
      if (data === current.data) {
        return current;
      }

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null;
  }

  has(data) {
    return this.find(data) !== null;
  }

  remove(data) {
    const removeNode = (node, value) => {
      if (node === null) {
        return null;
      }

      if (value < node.data) {
        node.left = removeNode(node.left, value);
      } else if (value > node.data) {
        node.right = removeNode(node.right, value);
      } else {
        // Case 1: no children.
        if (node.left === null && node.right === null) {
          return null;
        }

        // Case 2: only a right child.
        if (node.left === null) {
          return node.right;
        }

        // Case 2: only a left child.
        if (node.right === null) {
          return node.left;
        }

        // Case 3: two children.
        // Find the smallest node in the right subtree.
        let successor = node.right;

        while (successor.left !== null) {
          successor = successor.left;
        }

        node.data = successor.data;
        node.right = removeNode(node.right, successor.data);
      }

      return node;
    };

    this._root = removeNode(this._root, data);
    return this;
  }

  min() {
    if (this._root === null) {
      return null;
    }

    let current = this._root;

    while (current.left !== null) {
      current = current.left;
    }

    return current.data;
  }

  max() {
    if (this._root === null) {
      return null;
    }

    let current = this._root;

    while (current.right !== null) {
      current = current.right;
    }

    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};
