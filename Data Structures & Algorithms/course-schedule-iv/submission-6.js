class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    // 1 -> 2 -> 0
    // 1 ->   -> 0
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        const adjmap = Array.from( { length: numCourses }, () => []);
        const result = [];
        const visited = new Set();

        for(let [a, b] of prerequisites){
            adjmap[a].push(b);
        }

        const DFS = (curr, target) => {
            if(curr === target) return true;
            if(visited.has(curr)) return false;

            visited.add(curr);

            for(let a of adjmap[curr]){
                if(DFS(a, target)) {
                    visited.clear();
                    return true;
                } // visited cleanup is not happening
            }

            visited.delete(curr);
            return false;
        }

        for(let [curr, target] of queries){
            result.push(DFS(curr, target));
        }

        return result;
    }
}
