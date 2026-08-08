class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[]}
     */
    findMinHeightTrees(n, edges) {
        const heightMap = new Map();
        const adj = Array.from({ length: n }, () => []);

        for (let [a, b] of edges) {
            adj[a].push(b);
            adj[b].push(a);
        }

        // BFS to calculate tree height starting from a specific root
        const bfs = (start) => {
            const visited = new Array(n).fill(false);
            const q = [start];
            visited[start] = true;
            let height = 0;

            while (q.length > 0) {
                const size = q.length; // Process layer by layer
                height++;

                for (let i = 0; i < size; i++) {
                    const curr = q.shift();
                    for (let neighbor of adj[curr]) {
                        if (!visited[neighbor]) {
                            visited[neighbor] = true;
                            q.push(neighbor);
                        }
                    }
                }
            }

            return height;
        };

        let min = Infinity;
        for (let i = 0; i < n; i++) {
            const h = bfs(i);
            if (!heightMap.has(h)) {
                heightMap.set(h, []);
            }
            heightMap.get(h).push(i);
            min = Math.min(h, min);
        }

        return heightMap.get(min);
    }
}