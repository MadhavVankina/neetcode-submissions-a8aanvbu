class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    //  null
    canFinish(numCourses, prerequisites) {
        const n = numCourses;
        const adj = Array.from({ length: n }, () => []);

        for(let [u, v] of prerequisites){
            adj[u].push(v);
        }
        
        const visit = new Set();
        const dfs = (node) => {
            if(adj[node].length === 0) return true;
            if(visit.has(node)) return false;

            visit.add(node);

            for(let nei of adj[node]){
                if(!dfs(nei)) return false;
            }

            adj[node] = [];
            visit.delete(node);
            return true;
        }


        for(let i = 0; i < n; i++){
            if(!dfs(i)) return false;
        }

        return true;
    }
}
