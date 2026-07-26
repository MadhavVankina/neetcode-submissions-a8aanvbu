class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adj = Array.from({length: numCourses}, () => []);
        const visited = new Set();

        prerequisites.forEach(([a, b]) => adj[a].push(b));

        const dfs = (curr) => {
            if(visited.has(curr)) return false;
            if(adj[curr].length === 0) return true;

            visited.add(curr);

            for(let a of adj[curr]){
                if(!dfs(a)) return false;
            }

            visited.delete(curr);
            adj[curr] = [];

            return true;
        }


        for(let i = 0; i < numCourses; i++){
            if(!dfs(i)) return false;
        }

        return true;

    }
}
