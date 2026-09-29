class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    // [0, 1] [1, 2], [2, 0]
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        const adj = Array.from({length: numCourses}, () => []);
        const memo = Array.from({length: numCourses}, () => new Map());

        for(let [u, v] of prerequisites){
            adj[u].push(v);
        }

        const dfs = (node, target) => {
            if(node == target) return true;
            if(memo[node].has(target)) return memo[node].get(target);

            for(let nei of adj[node]){
                if(dfs(nei, target)){
                    memo[nei].set(target, true);
                    return true;
                }
            }

            memo[node].set(target, false);
            return false;
        }

        const result = [];
        for(let [c, t] of queries){
            result.push(dfs(c, t));
        }

        return result;
    }
}
