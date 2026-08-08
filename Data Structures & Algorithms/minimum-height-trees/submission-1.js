class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[]}
     */
    findMinHeightTrees(n, edges) {
        const adj = Array.from({ length: n }, () => []);
        const hMap = new Map();

        for(let [a, b] of edges){
            adj[a].push(b);
            adj[b].push(a);
        }

        const bfs = (start) => {
            const q = new Queue();
            const visit = new Set();
            let h = 0;
            
            q.enqueue(start);

            while(!q.isEmpty()){
                let size = q.size();
                h++;

                while(size > 0){
                    const curr = q.dequeue();

                    visit.add(curr);
                    for(let a of adj[curr]){
                        if(!visit.has(a)){
                            q.enqueue(a);
                        }
                    }

                    size--;
                }
            }

            return h;
        }

        let min = Infinity;
        for(let i = 0; i < n; i++){
            const h = bfs(i);
            if(!hMap.has(h)){
                hMap.set(h, []);
            }
            hMap.get(h).push(i);
            min = Math.min(min, h);
        }

        return hMap.get(min);
    }
}
