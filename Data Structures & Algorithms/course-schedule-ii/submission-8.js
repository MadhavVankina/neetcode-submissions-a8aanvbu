class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */

    // adj[0] = [1]

    findOrder(numCourses, prerequisites) {
        const edgeCount = Array(numCourses).fill(1);
        const adj = Array.from({length: numCourses}, () => []);

        for(let [a, b] of prerequisites){
            adj[b].push(a);
            edgeCount[a]++;
        }

        const q = new Queue();
        for(let i = 0; i < numCourses; i++){
            if(edgeCount[i] <= 1 ){
                q.enqueue(i);
            }
        }

        const result = new Set();
        while(!q.isEmpty()){
            let size = q.size();

            while(size > 0){
                const node = q.dequeue();
                edgeCount[node]--;
                result.add(node);
                size--;
                for(let nei of adj[node]){
                    if(result.has(nei)){
                        return [];
                    }

                    edgeCount[nei]--;
                    if(edgeCount[nei] === 1){
                        q.enqueue(nei);
                    }
                }
            }
        }

        return result.size === numCourses ? [...result] : [];

    }
}
