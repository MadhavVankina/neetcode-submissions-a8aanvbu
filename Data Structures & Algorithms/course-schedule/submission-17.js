class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adj = Array.from({ length: numCourses }, () => []);
        const visit = new Set();
        
        for(let [a, b] of prerequisites){
            adj[a].push(b);
        }

        const dfs = (x) => {
            if(adj[x].length === 0) return true;
            if(visit.has(x)) return false;

            visit.add(x);
            for(let a of adj[x]){
                if(!dfs(a)) return false;
            }
            visit.delete(x);
            adj[x] = [];
            return true;
        }

        for(let i = 0; i < numCourses; i++){
            if(!dfs(i)) return false;
        }

        return true;

    }
}
