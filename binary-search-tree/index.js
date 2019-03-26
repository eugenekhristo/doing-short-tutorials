class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      return (this.root = newNode);
    } else {
      let current = this.root;

      while (true) {
        if (current.value === value) return undefined;

        if (current.value > value) {
          if (current.left === null) {
            return (current.left = newNode);
          } else {
            current = current.left;
          }
        } else {
          if (current.right === null) {
            return (current.right = newNode);
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (!this.root) return -1;
    if (this.root.value === value) return this.root;

    let current = this.root;
    let found = false;

    while (!found && current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    return current || -1;
  }

  traverseBfs() {
    const queue = [this.root];
    const visited = [];

    while (queue.length > 0) {
      let current = queue.shift();
      visited.push(current.value);

      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }

    return visited;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(7);
tree.insert(9);
tree.insert(4);
tree.insert(25);
tree.insert(125);
tree.insert(2);
console.log(tree.traverseBfs());
