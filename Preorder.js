class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function preorder(root, res = []) {
  if (root) {
    res.push(root.data);
    preorder(root.left, res);
    preorder(root.right, res);
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

const result = preorder(root);
console.log("The result is: " + result);
