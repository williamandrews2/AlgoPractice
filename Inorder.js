class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function inorder(root, res = []) {
  if (root) {
    inorder(root.left, res);
    res.push(root.data);
    inorder(root.right, res);
  }

  return res;
}

// Driver code:

// Visualization of the example tree given:
//          F
//       /     \
//      D       I
//     / \      / \
//    B   E     G   J
//   /\         \
//  A  C         H

const root = new Node("F");
root.left = new Node("D");
root.right = new Node("I");

root.left.left = new Node("B");
root.left.right = new Node("E");

root.right.right = new Node("J");
root.right.left = new Node("G");

root.left.left.left = new Node("A");
root.left.left.right = new Node("C");

root.right.left.right = new Node("H");

const result = inorder(root);
console.log(result);
