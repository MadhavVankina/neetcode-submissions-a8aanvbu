class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[][]}
     */
    findCriticalAndPseudoCriticalEdges(n, edges) {
        const uf = new UnionFind(n);
        edges.forEach((val, i) => val.push(i));
        edges.sort((a, b) => a[2] - b[2]); // sorted edges with index

        let mstWeight = 0;
        for (let [n1, n2, w, _] of edges) {
            if (uf.union(n1, n2)) mstWeight += w;
        }

        const critical = [];
        const pseudo = [];
        for (let [n1, n2, edgeWeight, i] of edges) {
            // find critial edges
            let uf = new UnionFind(n)
            let weight = 0;
            for(let [v1, v2, wt, j] of edges){
                if(i != j && uf.union(v1, v2)){
                    weight += wt;
                }
            }

            const maxRank = Math.max(...uf.rank);
            if(maxRank != n || weight > mstWeight){
                critical.push(i);
                continue;
            }

            uf = new UnionFind(n);
            uf.union(n1, n2);
            weight = edgeWeight;
            for(let [v1, v2, wt, j] of edges){
                if(uf.union(v1, v2)){
                    weight += wt;
                }
            }

            if(weight === mstWeight){
                pseudo.push(i);
            }
            
        }

        return [critical, pseudo];
    }
}

class UnionFind {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = Array(n).fill(1);
    }

    find(i) {
        if (i !== this.parent[i]) {
            this.parent[i] = this.find(this.parent[i]);
        }

        return this.parent[i];
    }

    union(n1, n2) {
        const [root1, root2] = [this.find(n1), this.find(n2)];

        if (root1 === root2) return false;

        if (this.rank[root1] > this.rank[root2]) {
            this.parent[root2] = root1;
            this.rank[root1] += this.rank[root2];
        } else {
            this.parent[root1] = root2;
            this.rank[root2] += this.rank[root1];
        }

        return true;
    }
}
