class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        const adj = Array.from({length: numCourses}, () => []);
        
        for(let [a, b] of prerequisites){
            adj[a].push(b);
        }

        const dfs = (x, target, visit) => {
            if(x === target) return true;
            if(visit.has(x)) return false;
            visit.add(x);

            for(let a of adj[x]){
                if(dfs(a, target, visit)) return true;
            }

            return false;
        }

        const result = [];
        for(let [x, target] of queries){
            const val = dfs(x, target, new Set());
            result.push(val)
        }

        return result;
    }
}
