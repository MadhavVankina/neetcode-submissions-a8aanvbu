class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length !== n - 1) {
            return false;
        }

        const parent = Array.from({ length: n }, (_, i) => i);
        const rank = Array(n).fill(0);

        const find = (node) => {
            if(node != parent[node]){
                parent[node] = find(parent[node]);
            }

            return parent[node];
        }

        const union = (n1, n2) => {
            const root1 = find(n1);
            const root2 = find(n2);

            if(root1 == root2) return false;

            if(rank[root1] > rank[root2]){
                parent[root2] = root1;
                rank[root1] += rank[root2];
            }else{
                parent[root1] = root2;
                rank[root2] += rank[root1];
            }

            return true;
        }

        let count = n;
        for(let [u, v] of edges){
            if(union(u, v)){
                count--;
            }
        } 

        return count == 1   
    }
}
