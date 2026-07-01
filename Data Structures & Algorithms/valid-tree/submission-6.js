class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(n === 0) return false;

        const adjMap = Array.from({ length: n }, () => []);
        const visited = new Set();

        for(let [a, b] of edges){
            adjMap[a].push(b);
            adjMap[b].push(a);
        }

        const dfs = (curr, parent) => {

            if(visited.has(curr)) return false;

            visited.add(curr);

            for(let c of adjMap[curr]){
                if(c !== parent){
                    if(!dfs(c, curr)) return false;
                }
            }

            return true;
        }

        return dfs(0, -1) && visited.size === n;

    }
}