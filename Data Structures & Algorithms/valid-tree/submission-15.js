class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const indegree = Array(n).fill(0);
        const adj = Array.from({ length: n }, () => []);

        for (let [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);

            indegree[u]++;
            indegree[v]++;
        }

        const q = new Queue();
        for (let i = 0; i < n; i++) {
            if (indegree[i] === 1) {
                q.push(i);
            }
        }

        let count = 0;
        while (!q.isEmpty()) {
            const node = q.pop();
            count++;

            for(let nei of adj[node]){
                indegree[nei]--;

                if(indegree[nei] == 1){
                    q.push(nei);
                }
            }
        }

        return count === n ? true : false;
    }
}
