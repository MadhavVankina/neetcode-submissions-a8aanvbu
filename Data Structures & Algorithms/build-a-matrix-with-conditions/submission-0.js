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

        const dfs = () => {}
        const topologicalSort = () => { return []}

        const rowOrder = topologicalSort(rowConditions);
        const colOrder = topologicalSort(colConditions);

        if(!rowOrder || !colOrder) return [];

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
