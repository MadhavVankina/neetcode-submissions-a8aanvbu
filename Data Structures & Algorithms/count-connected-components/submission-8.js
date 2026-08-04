class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const parents = Array.from({ length: n }, (_, i) => i);
        const ranks = Array(n).fill(1);
        let components = n;

        const find = (i) => {
            if(parents[i] === i) return i;

            parents[i] = find(parents[i]);
            return parents[i];
        }

        const union = (a, b) => {
            const rootA = find(a);
            const rootB = find(b);

            if(rootA !== rootB){
                if(ranks[rootA] > ranks[rootB]){
                    parents[rootB] = rootA;
                }else if(ranks[rootA] > ranks[rootB]){
                    parents[rootA] = rootB;
                }else{
                    parents[rootA] = rootB;
                    ranks[rootB]++;
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
