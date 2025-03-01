// src/binary-search-tree.js

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this._addRecursive(this.rootNode, newNode);
    }
  }

  _addRecursive(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._addRecursive(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._addRecursive(node.right, newNode);
      }
    }
  }

  has(data) {
    return this._findNode(this.rootNode, data) !== null;
  }

  find(data) {
    return this._findNode(this.rootNode, data);
  }

  _findNode(node, data) {
    if (node === null) return null;
    if (data < node.data) return this._findNode(node.left, data);
    if (data > node.data) return this._findNode(node.right, data);
    return node;
  }

  remove(data) {
    this.rootNode = this._removeNode(this.rootNode, data);
  }

  _removeNode(node, data) {
    if (node === null) return null;
    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      }
      if (node.left === null) {
        return node.right;
      }
      if (node.right === null) {
        return node.left;
      }
      const minRight = this._findMin(node.right);
      node.data = minRight.data;
      node.right = this._removeNode(node.right, minRight.data);
    }
    return node;
  }

  _findMin(node) {
    while (node.left !== null) node = node.left;
    return node;
  }

  min() {
    if (this.rootNode === null) return null;
    return this._findMin(this.rootNode).data;
  }

  max() {
    if (this.rootNode === null) return null;
    let node = this.rootNode;
    while (node.right !== null) node = node.right;
    return node.data;
  }
}

module.exports = BinarySearchTree;
