class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const adjmap = Array.from({ length: n }, () => []);
        const visited = new Set();
        let count = 0;

        for (let [a, b] of edges) {
            adjmap[a].push(b);
        }

        const DFS = (curr) => {
            if (visited.has(curr)) return;

            visited.add(curr);

            for(let a of adjmap[curr]){
                DFS(a);
            }
        }

        for(let i = 0; i < n; i++){
            if(!visited.has(i)){
                DFS(i);
                count++;
            }
        }


        return count;
    }
}
