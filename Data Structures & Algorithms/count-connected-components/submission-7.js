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

        const find = (i) => {
            if(parent[i] == i) return i;

            const p = find(parent[i]);
            return p;
        }

        const union = (a, b) => {
            const rootA = find(a);
            const rootB = find(b);

            if(rootA !== rootB){
                if(rank[rootA] > rank[rootB]){
                    parent[rootB] = rootA;
                }else if(rank[rootA] < rank[rootB]){
                    parent[rootA] = rootB;
                }else{
                   parent[rootA] = rootB;
                   rank[rootB]++;
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
