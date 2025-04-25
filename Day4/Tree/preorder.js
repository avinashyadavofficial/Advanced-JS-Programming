class TreeNode{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}
function preorder(root){
    if(root==null){
        return;
    }
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right=new TreeNode(6);
preorder(root);