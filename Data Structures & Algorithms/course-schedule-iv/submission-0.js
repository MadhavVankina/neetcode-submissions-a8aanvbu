class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */

    checkIfPrerequisite(numCourses, prerequisites, queries) {
        const adjmap = Array.from({ length: numCourses }, () => []);
        
        for(let [a, b] of prerequisites){
            adjmap[a].push(b);
        }

        const DFS = (curr, target, visited) => {
            if(curr === target) return true;
            if(visited.has(curr)) return false;

            visited.add(curr);
            for(let next of adjmap[curr]){
                if(DFS(next, target, visited)) return true;
            }

            return false;
        }

        const res = [];
        for(let [curr, target] of queries){
            res.push(DFS(curr, target, new Set()));
        }

        return res;
    }
}