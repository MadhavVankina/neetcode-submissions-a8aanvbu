class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(n, prerequisites) {
        const adj = Array.from({ length: n }, () => []);
        const indegree = Array(n).fill(0);

        for (let [course, prereq] of prerequisites) {
            adj[prereq].push(course);
            indegree[course]++;
        }

        const q = new Queue();

        for(let i = 0; i < n; i++){
            if(indegree[i] === 0){
                q.push(i);
            }
        }

        const result = new Set();

        while(!q.isEmpty()){
            const node = q.pop();
            if(result.has(node)) return [];
            result.add(node);
            indegree[node]--;

            for(let nei of adj[node]){
                indegree[nei]--;

                if(indegree[nei] == 0){
                    q.push(nei);
                }
            }
        }

        return result.size == n ? [...result] : [];

    }
}
