class TreeNode{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}
let root=new TreeNode(1);
root.left=new TreeNode(2);
root.right=new TreeNode(3);
console.log(root);

