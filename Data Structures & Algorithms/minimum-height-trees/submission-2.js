class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[]}
     */
    findMinHeightTrees(n, edges) {
        if(n === 1) return [0];

        const edgesAttached = Array(n).fill(0);
        const adj = Array.from({length: n}, () => []);

        for(let [a, b] of edges){
            adj[a].push(b);
            adj[b].push(a);
            edgesAttached[a]++;
            edgesAttached[b]++;
        }

        const q = new Queue();
        for(let i = 0; i < n; i++){
            if(edgesAttached[i] === 1){
                q.enqueue(i);
            }
        }

        let remain = n;
        while(remain > 2){
            let size = q.size();
            remain -= size;

            while(size > 0){
                const curr = q.dequeue();
                size--;

                for(let nei of adj[curr]){
                    edgesAttached[nei]--;

                    if(edgesAttached[nei] === 1){
                        q.enqueue(nei);
                    }
                }
            }
        }

        const result = [];
        while(!q.isEmpty()){
            result.push(q.dequeue())
        }

        return result;
    }
}
