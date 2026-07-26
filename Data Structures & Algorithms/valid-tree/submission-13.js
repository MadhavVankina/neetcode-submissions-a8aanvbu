class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const adj = Array.from({ length: n }, () => []);
        const visit = new Set();

        for(let [a, b] of edges){
            adj[a].push(b);
            adj[b].push(a);
        }

        const result = function dfs(node, parent){
            if(visit.has(node)) return false;

            visit.add(node);
            for(let nei of adj[node]){
                if(nei !== parent){
                    if(!dfs(nei, node)) return false;
                }
            }

            return true;
        }(0, -1);

        return visit.size === n ? result : false;
    }
}
