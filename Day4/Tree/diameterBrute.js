class TreeNode{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}
function height(root) {
    if (!root) return 0;
    return 1 + Math.max(height(root.left), height(root.right));
}

function diameter(root) {
    if (!root) return 0;

    let leftHeight = height(root.left);
    let rightHeight = height(root.right);
    let pathThroughRoot = leftHeight + rightHeight;

    let leftDiameter = diameter(root.left);
    let rightDiameter = diameter(root.right);

    return Math.max(pathThroughRoot, leftDiameter, rightDiameter);
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right=new TreeNode(6);
console.log(diameter(root)); //4