class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const adj = Array.from({ length: numCourses }, () => []);
        const cycle = new Set();
        const visit = new Set();
        const result = [];

        prerequisites.forEach(([a, b]) => adj[a].push(b));

        const dfs = (node) => {
            if (cycle.has(node)) return false;
            if (visit.has(node)) return true;

            cycle.add(node);
            for (let nei of adj[node]) {
                if (!dfs(nei)) return false;
            }

            cycle.delete(node);
            visit.add(node);
            result.push(node);
            return true;
        };

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return [];
        }

        return result.length === numCourses ? result : [];
    }
}
