class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const adjmap = Array.from({ length: n }, () => []);
        let visited = new Set();

        for (let [a, b] of edges) {
            adjmap[a].push(b);
            adjmap[b].push(a);
        }

        const q = new Queue();
        q.enqueue([0, -1]);
        

        while(!q.isEmpty()){
            let size = q.size();

            while(size > 0){
                const [curr, parent] = q.dequeue();

                if(visited.has(curr)) return false;

                visited.add(curr);

                for(let nei of adjmap[curr]){
                    if(nei !== parent){
                        q.enqueue([nei, curr]);
                    }
                }

                size--;

            }
        }

        return visited.size === n;
        
    }
}
