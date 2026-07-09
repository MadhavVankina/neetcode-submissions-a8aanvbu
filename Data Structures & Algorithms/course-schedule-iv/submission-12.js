class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(n, prerequisites, queries) {
        const prereq = Array.from({ length: n }, () => []);

        for(let [a, b] of prerequisites){
            prereq[a].push(b);
        }

        const DFS = (curr, target, visited) => {
            if(curr === target) return true;
            if(visited.has(curr)) return false;

            for(let nei of prereq[curr]){
                if(DFS(nei, target, visited)) return true;
            }

            return false;
        }

        const result = [];
        for(let [curr, target] of queries){
            result.push(DFS(curr, target, new Set()));
        }

        return result;

    }
}
