class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    // numCourses = 4, prerequisites = [[1,0],[2,1],[3,2]], queries = [[0,1],[3,1]]
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        const n = numCourses;
        const adj = Array.from({length: n}, () => []);

        for(let [course, prereq] of prerequisites){
            adj[course].push(prereq);
        }


        const dfs = (node, target, visit) => {
            if(node == target) return true;
            if(visit.has(node)) return false;
            visit.add(node);

            for(let nei of adj[node]){
                if(dfs(nei, target, visit)){
                    return true;
                }
            }

            return false;
        }

        const result = [];
        for(let [node, target] of queries){
            const sol = dfs(node, target, new Set());
            result.push(sol);
        }

        return result;
    }
}
