class Node {
    constructor(left, value, right) {
      this.left = left;
      this.value = value;
      this.right = right;
    }
  }
  
  const D = new Node(null, "D", null);
  const E = new Node(null, "E", null);
  const F = new Node(null, "F", null);
  const B = new Node(D, "B", E);
  const C = new Node(null, "C", F);
  const A = new Node(B, "A", C);

function preorderTraversal(node) {
    if (node) {
      console.log(node.value);
      preorderTraversal(node.left);
      preorderTraversal(node.right);
    }
  }
  
// preorderTraversal(A)

function inorderTraversal(node) {
    if (node) {
      inorderTraversal(node.left);
      console.log(node.value);
      inorderTraversal(node.right);
    }
  }
//   inorderTraversal(A)

  function postorderTraversal(node) {
    if (node) {
      postorderTraversal(node.left);
      postorderTraversal(node.right);
      console.log(node.value);
    }
  }

  postorderTraversal(A)
  