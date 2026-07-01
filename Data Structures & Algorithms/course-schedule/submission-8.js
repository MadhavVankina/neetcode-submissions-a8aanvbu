class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */

    canFinish(numCourses, prerequisites) {
        const adjMap = Array.from({ length: numCourses }, () => []);
        const visited = new Set();
        const indegree = Array(numCourses).fill(0);

        for(let [a, b] of prerequisites){
            adjMap[b].push(a);
            indegree[a]++;
        }

        const q = new Queue();
        let count = 0;

        for(let i = 0; i < numCourses; i++){
            if(indegree[i] === 0){
                q.enqueue(i);
            }
        }

        while(!q.isEmpty()){
            const size = q.size();

            for(let i = 0; i < size; i++){
                const curr = q.dequeue();
                if(visited.has(curr)) continue;
                count++;
                visited.add(curr);

                for(let a of adjMap[curr]){
                    indegree[a]--;
                    if (indegree[a] === 0) {
                        q.enqueue(a);
                    }
                }
            }
        }

        return count === numCourses;
    }
}