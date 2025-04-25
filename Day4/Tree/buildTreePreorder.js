class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}
class BinaryTree{
    constructor(idx){
        this.idx=-1;
    }
    buildTree(nodes){
        this.idx++;
        if(nodes[this.idx]==-1){
            return null;
        }
        let newNode=new Node(nodes[this.idx]);
        newNode.left=this.buildTree(nodes);
        newNode.right=this.buildTree(nodes);
        return newNode;
    }
}
let nodes=[1,2,4,-1,-1,5,-1,-1,3,-1,6,-1,-1];
let tree=new BinaryTree();
let root=tree.buildTree(nodes);
console.log(root);
