class TreeNode{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}
function sumNodes(root){
    if(root==null){
        return 0;
    }
    let lh=sumNodes(root.left);
    let rh=sumNodes(root.right);
    let sum=lh+rh+root.val;
    return sum;
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right=new TreeNode(6);
console.log(sumNodes(root));