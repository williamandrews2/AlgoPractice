class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.isEmpty ? "Queue is empty." : this.items.shift();
  }

  peek() {
    return this.items.isEmpty ? "Queue is empty" : this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.join(", "));
  }
}

function levelOrder(root) {
  if (root === null) return; // base case

  let q = new Queue();
  let res = []; // result

  q.enqueue(root);
  
  while (!q.isEmpty()) {
    let node = q.dequeue();
    res.push(node.data);

    if (node.left !== null) {
      q.enqueue(node.left);
    }
    if (node.right !== null) {
      q.enqueue(node.right);
    }
  }

  return res;
}

// Driver code:

// Visualization of the example tree given:
//        5
//       /  \
//      12    13
//     /  \     \
//    7    14     2
//   /\    /\     /\
// 17 23  27  3  8  11

const root = new Node(5);
root.left = new Node(12);
root.right = new Node(13);

root.left.left = new Node(7);
root.left.right = new Node(14);

root.right.right = new Node(2);

root.left.left.left = new Node(17);
root.left.left.right = new Node(23);

root.left.right.left = new Node(27);
root.left.right.right = new Node(3);

root.right.right.left = new Node(8);
root.right.right.right = new Node(11);

const result = levelOrder(root);
console.log(result);
