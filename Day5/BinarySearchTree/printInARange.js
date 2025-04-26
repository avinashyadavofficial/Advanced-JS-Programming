// Intuition
// At any node:
// If node.val > k1, we might have values in the left subtree, so recurse left.
// If node.val < k2, we might have values in the right subtree, so recurse right.
// If node.val is in the range →  print it!
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
function printInRange(root,k1,k2){
    if(root==null){
        return;
    }
    //going left
    if(root.val>k1){
        printInRange(root.left,k1,k2);
    }
    //going right
    if(root.val<k2){
        printInRange(root.right,k1,k2);
    }
    // current node in range
    if(root.val>=k1 && root.val<=k2){
        console.log(root.val);
    }

}
let root=null;
let values=[5,3,7,2,4,6,8];
for(let val of values){
    root=insertingNode(root,val);
}
printInRange(root,2,6);
