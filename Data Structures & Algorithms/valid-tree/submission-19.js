class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const adj = Array.from({length: n}, () => []);  

        for(let [u, v] of edges){
            adj[u].push(v);
            adj[v].push(u);
        }

        console.log(adj);

        const visited = new Set();

        const dfs = (node, parent) => {
            if(visited.has(node)) return false;
            visited.add(node);

            for(let child of adj[node]){
                if(child != parent && !dfs(child, node)){
                    return false;
                }
            }


            return true;
        }

        const result = dfs(0, -1);

        return visited.size == n ? result : false;
    }
}
