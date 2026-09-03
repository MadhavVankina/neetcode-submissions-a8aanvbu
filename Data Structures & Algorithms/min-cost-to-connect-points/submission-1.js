class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        const n = points.length;
        const adj = Array.from({length: n}, () => []);
        

        for(let i = 0; i < n; i++){
            const [x1, y1] = points[i];
            for(let j = i + 1; j < n; j++){
                const [x2, y2] = points[j];

                const dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);
                adj[i].push([dist, j]);
                adj[j].push([dist, i]);
            }
        }

        let result = 0;
        const pq = new PriorityQueue((a, b) => a[0] - b[0]);
        const visited = new Set();

        pq.enqueue([0, 0]);

        while(visited.size < n){
            const [dist, i] = pq.dequeue();
            if(visited.has(i)) continue;

            visited.add(i);
            result += dist;

            for(let [nextDist, nextI] of adj[i]){
                if(!visited.has(nextI)){
                    pq.enqueue([nextDist, nextI]);
                }
            }
        }

        return result;
    }
}
