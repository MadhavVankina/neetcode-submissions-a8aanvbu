class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const indegree = Array(numCourses).fill(0);
        const adj = Array.from({ length: numCourses }, () => []);

        for (let [a, b] of prerequisites) {
            indegree[b]++;
            adj[a].push(b);
        }

        const q = new Queue();
        indegree.forEach((val, i) => (val === 0 ? q.enqueue(i) : null));
        
        let finish = 0;
        while(!q.isEmpty()){
            const node = q.dequeue();
            finish++;
            for(let nei of adj[node]){
                indegree[nei]--;
                if(indegree[nei] === 0){
                    q.enqueue(nei);
                }
            }
        }

        return finish === numCourses;
    }
}
