class TreeNode{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}
function diameterOfBT(root) {
    let diameter = 0;

    function dfs(node) {
        if (!node) return 0;

        const left = dfs(node.left);
        const right = dfs(node.right);

        diameter = Math.max(diameter, left + right); // update

        return 1 + Math.max(left, right); // return height
    }

    dfs(root);
    return diameter;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right=new TreeNode(6);
console.log(diameterOfBT(root)); //4