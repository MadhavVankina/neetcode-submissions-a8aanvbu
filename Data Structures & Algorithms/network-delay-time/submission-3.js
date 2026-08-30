class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const adj = Array.from({ length: n + 1 }, () => []);
        const visited = new Set();
        let effort = 0;

        for(let [u, v, w] of times) {
            adj[u].push([v, w]);
        }

        const pq = new PriorityQueue((a, b) => a[1] - b[1]);
        pq.enqueue([k, 0]);

        while(!pq.isEmpty()){
            const [node, w] = pq.dequeue();
            if(visited.has(node)) continue;

            visited.add(node);
            effort = Math.max(w, effort);
            for(let [nei, nw] of adj[node]){
                pq.enqueue([nei, w + nw]);
            }
        }

        return visited.size == n ? effort : -1;
    }
}
