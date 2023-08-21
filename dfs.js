const dfs = (root) => {
    const result = [];
    const iter = (node) => {
        result.push(node.val);
        if (node.left) {
            iter(node.left);
        }
        if (node.right) {
            iter(node.right);
        }
    }

    iter(root);

    return result;
}
