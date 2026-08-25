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
        let delay = 0;

        for (const [u, v, t] of times) {
            adj[u].push([v, t]);
        }

        const pq = new PriorityQueue((a, b) => a[1] - b[1]);
        pq.enqueue([k, 0]);

        while(!pq.isEmpty()){
            const [node, time] = pq.dequeue();
            delay += time;
            visited.add(node);
            if(visited.size === n) return delay;

            for(let [nextNode, t] of adj[node]){
                if(!visited.has(nextNode)){
                    pq.enqueue([nextNode, t]);
                }
            }
        }

        return pq.size == n ? delay : -1;

    }
}
