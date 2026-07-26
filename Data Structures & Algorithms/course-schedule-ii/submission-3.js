class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const indegree = Array(numCourses).fill(0);
        const adj = Array.from({ length: numCourses }, () => []);

        prerequisites.forEach(([a, b]) => {
            indegree[a]++;
            adj[b].push(a);
        });

        const q = new Queue();
        const result = [];

        indegree.forEach((val, i) => {
            if (val === 0) {
                q.enqueue(i);
            }
        });

        while (!q.isEmpty()) {
            const node = q.dequeue();
            result.push(node);

            for(let nei of adj[node]){
                if(--indegree[nei] === 0){
                    q.enqueue(nei);
                }
            }
        }

        

        return result.length === numCourses ? result : [];
    }
}
