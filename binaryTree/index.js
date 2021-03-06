class BinaryTree {
    constructor() {
        this.root = null;
    }

    addNode(value) {
        const node = this.createNode(value);

        if (this.root === null) {
            this.root = node;
        } else {
            let currentNode = this.root;

            while (currentNode) {
                if (value < currentNode.value) {
                    if (currentNode.left) {
                        currentNode = currentNode.left;
                    } else {
                        currentNode.left = node;
                        break;
                    }
                } else {
                    if (currentNode.right) {
                        currentNode = currentNode.right;
                    } else {
                        currentNode.right = node;
                        break;
                    }
                }
            }
        }
    }

    DFS(value) {
        const stack = [];

        stack.push(this.root);
        let currentNode = this.root;

        while (stack.length > 0) {
            const node = stack.pop();

            if (node.value === value) {
                currentNode = node;
                break;
            }

            if (node.left !== null) {
                node.left.parent = node;
                stack.push(node.left);
            }

            if (node.right !== null) {
                node.right.parent = node;
                stack.push(node.right);
            }
        }

        const path = [];
        path.push(currentNode);

        while (currentNode.parent !== null){
            path.push(currentNode.parent);
            currentNode = currentNode.parent;
        }

        return path.length === 1 ? [] : path;
    }

    createNode(value) {
        return {
            value,
            left: null,
            right: null,
            parent: null
        }
    }
}

const binaryTree = new BinaryTree();

binaryTree.addNode(9);
binaryTree.addNode(18);
binaryTree.addNode(2);
binaryTree.addNode(7);
binaryTree.addNode(12);

console.log(binaryTree);

console.log(binaryTree.DFS(7));
console.log(binaryTree.DFS(11));

