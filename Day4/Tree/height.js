class TreeNode{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}
function height(root){
    if(root==null){
        return 0;
    }
    let lh=height(root.left);
    let rh=height(root.right);
    let hght=Math.max(lh,rh)+1;
    return hght;
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right=new TreeNode(6);
console.log(height(root));