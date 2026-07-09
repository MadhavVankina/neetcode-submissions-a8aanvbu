class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(n, prerequisites, queries) {
        const prereq = Array.from({ length: n }, () => []);
        const cache = Array.from({ length: n }, () => new Set());

        for (let [a, b] of prerequisites) {
            prereq[a].push(b);
            cache[a].add(b);
        }

        const DFS = (curr, target) => {
            if(cache[curr].has(target)) return true;
            if (curr === target) return true;

            for (let nei of prereq[curr]) {
                if (DFS(nei, target)){
                    cache[nei].add(target);
                    return true;
                } 
            }

            return false;
        };

        const result = [];
        for (let [curr, target] of queries) {
            result.push(DFS(curr, target));
        }

        return result;
    }
}
