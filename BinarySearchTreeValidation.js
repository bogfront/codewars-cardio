// This is here as documentation. The nodes in the tree are instances of
// this class. You don't need to change this implementation.
class Node {
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const isBST = node => {
    if (!node || node.value == null) {
        return true;
    }

    console.log(node);
    if (node.left == null && node.right == null) {
        return true
    }
    return false;
};

const T = (v, l, r) => new Node(v, l, r);

console.log(isBST(), true);