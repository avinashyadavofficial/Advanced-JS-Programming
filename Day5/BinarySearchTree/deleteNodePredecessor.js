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
function deleteNode(root,key){
    if(root==null){
        return null;
    }
    if(key<root.val){
        root.left=deleteNode(root.left,key);
    }
    else if(key>root.val){
        root.right=deleteNode(root.right,key);
    }
    else{
        //Node found
        //Case 1: no child
        if(root.left==null || root.right==null){
            return null;
        }
        //Case 2: one child
        if(root.left==null) return root.right;
        if(root.right==null) return root.left;
        //Case 3: two child
        let predecessor=findMax(root.left);
        root.val=predecessor.val;
        root.left=deleteNode(root.left,predecessor.val);
    }
    return root;
}
function findMax(node){
    while(node.right!=null){
        node=node.right;
    }
    return node;
}
let root=null;
let values=[5,3,7,2,4,6,8];
for(let val of values){
    root=insertingNode(root,val);
}
root=deleteNode(root,4);
console.log(root);