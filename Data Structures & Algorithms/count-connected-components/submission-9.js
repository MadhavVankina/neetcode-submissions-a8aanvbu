class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const parent = Array.from({ length: n }, (_, i) => i);
        const rank = Array(n).fill(1);
        let components = n;

        const find = (x) => {
            if(x !== parent[x]){
                parent[x] = find(parent[x]);
            }

            return parent[x];
        }

        const union = (a, b) => {
            const p1 = find(a);
            const p2 = find(b); 

            if(p1 !== p2){
                if(rank[p1] > rank[p2]){
                    parent[p2] = p1;
                }else if(rank[p2] > rank[p1]){
                    parent[p1] = p2;
                }else{
                    parent[p2] = p1;
                    rank[p1]++;
                }

                components--;
            }
        }

        for(let [a, b] of edges){
            union(a, b);
        }

        return components;
    }
}
