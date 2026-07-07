class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        const adjmap = Array.from( { length: numCourses }, () => []);
        const result = [];
        const memo = Array.from({ length: numCourses }, () => new Map());

        for(let [a, b] of prerequisites){
            adjmap[a].push(b);
        }

        const DFS = (curr, target) => {
            if(curr === target) return true;
            if(memo[curr].has(target)) return memo[curr].get(target);

            for(let a of adjmap[curr]){
                if(DFS(a, target)) {
                    memo[curr].set(target, true);
                    return true;
                }
            }
            
            memo[curr].set(target, false);
            return false;
        }

        for(let [curr, target] of queries){
            const res = DFS(curr, target);
            result.push(res);
        }

        return result;
    }
}