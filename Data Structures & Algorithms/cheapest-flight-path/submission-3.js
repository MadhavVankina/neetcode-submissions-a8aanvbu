class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        const prices = Array(n).fill(Infinity);
        prices[src] = 0;
        const adj = Array.from({ length: n }, () => []);

        for(let [s, d, w] of flights){
            adj[s].push([d, w]);
        }

        const q = new Queue();
        q.push([0, src, 0]);

        while(!q.isEmpty()){
            const [cst, node, stop] = q.pop();
            if(stop > k) continue;

            for(let [nei, w] of adj[node]){
                const nxtCst = cst + w;
                if(nxtCst < prices[nei]){
                    prices[nei] = nxtCst;
                    q.push([nxtCst, nei, stop + 1]);
                }
            }
        }

        return prices[dst] === Infinity ? -1 : prices[dst];
    }
}
