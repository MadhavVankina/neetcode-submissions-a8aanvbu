class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        const adj = Array.from({length: numCourses}, () => []);
        const memo = Array.from({length: numCourses}, () => new Map());
        
        for(let [a, b] of prerequisites){
            adj[a].push(b);
        }

        const dfs = (x, target) => {
            if(x === target) return true;
            if(memo[x].has(target)) return memo[x].get(target);
            
            for(let a of adj[x]){
                if(dfs(a, target)){ 
                    memo[x].set(target, true);
                    return true;
                }
            }
            
            memo[x].set(target, false);
            return false;
        }

        const result = [];
        for(let [x, target] of queries){
            const val = dfs(x, target);
            result.push(val)
        }

        return result;
    }
}
