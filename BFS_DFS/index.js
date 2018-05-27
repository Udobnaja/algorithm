// Хранить как список смежных вершин

const advmatrix = [
    [0, 1, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0]
];


class Graph {
    constructor(){
        this.list = {};
        this.nodes = [];
        this.start = null;
        this.end = null;
    }

    addNode(value) {
        const node = this.createNode(value);
        this.nodes.push(node);
        this.list[node.value] = node;
    }

    createNode(value) {
        return {
            value,
            edges: [],
            selected: false,
            parent: null
        }
    }

    addEdge(value, vertex) {
        this.list[value].edges.push(vertex);
    }
    //
    // DFS() {
    //     const visited = {};
    //     const nodes = Object.keys(this.list);
    //
    //     for (let i = 0; i < nodes.length; i++) {
    //         const node = nodes[i];
    //
    //         this._dfsReq(visited, node)
    //     }
    // }
    //
    // _dfsReq(visited, vertex){
    //     if (!visited[vertex]) {
    //         visited[vertex] = true;
    //
    //         const children = this.list[vertex];
    //
    //         for (let i = 0; i < children.length; i++) {
    //             console.log(children.length);
    //             console.log('-----------CHILDREN---------');
    //
    //             const child = children[i];
    //             this._dfsReq(visited, child);
    //         }
    //     }
    // }

    BFS(start, end) {
        const quene = [];
        this.start = this.list[start];
        this.end = this.list[end];

        this.start.selected = true;

        quene.push(this.start);

        while (quene.length > 0) {
            const current = quene.shift();

            if (current === this.end) {
               break;
            }

            const edges = current.edges;

            for (const edge of edges) {

                if (this.list[edge].selected === false) {
                    this.list[edge].selected = true;
                    this.list[edge].parent = current;
                    quene.push(this.list[edge]);
                }
            }
        }


        const path = [];

        path.push(this.end);

        let next = this.end.parent;

        while (next !== null) {
            path.push(next);

            next = next.parent;
        }

        return path;


    }
}

const graph = new Graph();

for (let i = 0; i < advmatrix.length; i++) {
    graph.addNode(i);

    for (let j = 0; j < advmatrix[i].length; j++) {
        if (advmatrix[i][j] === 1) {
            graph.addEdge(i, j);
        }
    }
}

console.log(graph);

const path = graph.BFS(6, 3);
console.log(path);

