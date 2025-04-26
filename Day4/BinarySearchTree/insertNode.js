class TreeNode{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}
function insertingNode(root,val){
    if(root==null){
        return new TreeNode(val);
    }
    if(val<root.val){
        root.left=insertingNode(root.left,val);
    }
    else{
        root.right=insertingNode(root.right,val);
    }
    return root;
}
let root=null;
let values=[5,3,7,2,4,6,8];
for(let val of values){
    root=insertingNode(root,val);
}
console.log(root);