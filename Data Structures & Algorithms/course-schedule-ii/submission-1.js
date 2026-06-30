class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */

    findOrder(numCourses, prerequisites) {
        const adjMap = Array.from({ length: numCourses }, () => []);
        const visited = new Set();
        const cycle = new Set();
        const result = [];

        for(let [a, b] of prerequisites){
            adjMap[a].push(b);
        }

        const dfs = (n) => {
            if(cycle.has(n)) return false;
            if(visited.has(n)) return true;

            cycle.add(n);
            for(let a of adjMap[n]){
                if(!dfs(a)){
                    return false;
                }
            }

            cycle.delete(n);
            visited.add(n);
            result.push(n);
            return true;
        }

        for(let i = 0; i < numCourses; i++){
            if(!visited.has(i)){
                if(!dfs(i)) return [];
            }
        }

        return result;

    }
}