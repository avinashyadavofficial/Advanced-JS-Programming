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
function search(root,key){
    if(root==null){
        return false;
    }
    if(key==root.val){
        return true;
    }
    else if(key<root.val){
        return search(root.left,key);
    }
    else{
        return search(root.right,key);
    }
}
let root=null;
let values=[5,3,7,2,4,6,8];
for(let val of values){
    root=insertingNode(root,val);
}
console.log(search(root,4));//true
console.log(search(root,122));//false