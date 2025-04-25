class TreeNode{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}
function levelorder(root){
    if(root==null){
        return;
    }
    let queue=[root];
    while(queue.length!=0){
       const node=queue.shift();
       console.log(node.val);
       if(node.left!=null){
          queue.push(node.left);
       }
       if(node.left!=null){
        queue.push(node.right);
       }
    }
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right=new TreeNode(6);
levelorder(root);