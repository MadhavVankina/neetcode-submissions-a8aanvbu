class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const visited = new Set();
        const adjmap = Array.from({ length: n }, () => []);

        for (let [a, b] of edges) {
            adjmap[a].push(b);
            adjmap[b].push(a);
        }

        const DFS = (curr, parent) => {
            if (visited.has(curr)) return false;

            visited.add(curr);

            for(let a of adjmap[curr]){
                if(a !== parent){
                    if(!DFS(a, curr)) return false;
                }
            }

            return true;
        };

        let result = DFS(0, -1);
        return visited.size === n && result;
    }
}
