const bfs = (root) => {
    const queue = [];   

    const result = [];

    queue.push(root);

    while (queue.length) {
        const next = queue.shift();
        console.log(next.val);
        result.push(next.val);

        if (next.left) {
            queue.push(next.left);
        }
        if (next.right) {
            queue.push(next.right);
        }
    }

    return result;
}


