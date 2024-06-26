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

function DFS(node) {
  if (node == null) {
    return;
  }
  console.log(node.value);
  DFS(node.left);
  DFS(node.right);
}

// DFS(A)

function BFS(node) {
  let queue = [];
  queue.push(node);

  while (queue.length > 0) {
    let node = queue.shift();
    console.log(node.value);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
}

BFS(A);
