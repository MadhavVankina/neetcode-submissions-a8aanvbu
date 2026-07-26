class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adj = Array.from({ length: numCourses }, () => []);
        const cycle = new Set();

        for(let [a, b] of prerequisites){
            adj[a].push(b);
        }

        const DFS = (n) => {
            if(cycle.has(n)) return false;

            cycle.add(n);

            for(let a of adj[n]){
                if(!DFS(a)) return false;
            }

            cycle.delete(n);

            return true;
        }

        for(let i = 0; i < numCourses; i++){
            if(!DFS(i)) return false;
        }

        return true;
    }
}
