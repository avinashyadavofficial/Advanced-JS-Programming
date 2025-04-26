class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function insertingNode(root, val) {
    if (root == null) {
        return new TreeNode(val);
    }
    if (val < root.val) {
        root.left = insertingNode(root.left, val);
    } else {
        root.right = insertingNode(root.right, val);
    }
    return root;
}

// Inorder Traversal (Left -> Root -> Right)
function inorder(node) {
    if (node !== null) {
        inorder(node.left);
        console.log(node.val);   
        inorder(node.right);
    }
}

// Preorder Traversal (Root -> Left -> Right)
function preorder(node) {
    if (node !== null) {
        console.log(node.val);
        preorder(node.left);
        preorder(node.right);
    }
}

// Postorder Traversal (Left -> Right -> Root)
function postorder(node) {
    if (node !== null) {
        postorder(node.left);
        postorder(node.right);
        console.log(node.val);
    }
}


let root = null;
let values = [5, 3, 7, 2, 4, 6, 8];
for (let val of values) {
    root = insertingNode(root, val);
}


console.log("Inorder Traversal:");
inorder(root);

console.log("Preorder Traversal:");
preorder(root);

console.log("Postorder Traversal:");
postorder(root);
