class TreeNode{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}
function postorder(root){
    if(root==null){
        return;
    }
    postorder(root.left);
    postorder(root.right);
    console.log(root.val);
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right=new TreeNode(6);
postorder(root);