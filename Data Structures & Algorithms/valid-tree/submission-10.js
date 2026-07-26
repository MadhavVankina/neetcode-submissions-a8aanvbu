class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const adj = Array.from({ length: n }, () => []);
        const visit = new Set();
        let count = 0;

        edges.forEach(([a, b]) => {
            adj[a].push(b);
        });

        const result = function dfs(node){
            if(visit.has(node)) return false;

            visit.add(node);
            for(let nei of adj[node]){
                if(!dfs(nei)) return false;
            }

            count++;
            return true;
        }(0);

        return count === n ? result : false;
    }
}
