class Solution {
    /**
     * @param {number} k
     * @param {number[][]} rowConditions
     * @param {number[][]} colConditions
     * @return {number[][]}
     */
    //[2,0,0]
    //[0,0,1]
    //[0,3,0]
    buildMatrix(k, rowConditions, colConditions) {
        const topologicalSort = (conditions) => { 
            const adj = Array.from({length: k + 1}, () => []);
            const indegree = Array(k + 1).fill(0);

            for(let [u, v] of conditions){
                adj[u].push(v);
                indegree[v]++;
            }

            const q = new Queue();

            for(let i = 1; i < k + 1; i++){
                if(indegree[i] == 0){
                    q.push(i);
                }
            }
            const result = [];
            while(!q.isEmpty()){
                const node = q.pop();
                result.push(node);

                for(let nei of adj[node]){
                    indegree[nei]--;
                    if(indegree[nei] === 0){
                        q.push(nei);
                    }
                }
            }

            return result;
        }

        const rowOrder = topologicalSort(rowConditions);
        const colOrder = topologicalSort(colConditions);

        if(!rowOrder.length || !colOrder.length) return [];

        const result = Array.from({length: k}, () => Array(k).fill(0));

        const rowMap = {};
        const colMap = {};

        for(let i = 0; i < k; i++){
            rowMap[rowOrder[i]] = i;
            colMap[colOrder[i]] = i;
        }

        for(let i = 1; i <= k; i++){
            result[rowMap[i]][colMap[i]] = i;
        }

        return result;
    }
}
