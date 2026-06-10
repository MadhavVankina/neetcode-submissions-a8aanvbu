class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */

    // [[1, 3], [4, 3], [2, 3]]
    // 3: [1]        | 1: [3]
    // 3: [1, 4].    | 4: [3]
    // 3: [1, 4, 2]. | 2: [3]
    findJudge(n, trust) {
        const trusteeMap = {};
        const trusterMap = {};
        let max = -Infinity;
        let judge = -1;

        for (let [p1, p2] of trust) {
            if (!trusteeMap[p2]) {
                trusteeMap[p2] = [];
            }

            if (!trusterMap[p1]) {
                trusterMap[p1] = [];
            }

            trusteeMap[p2].push(p1);
            trusterMap[p1].push(p2);

            if (trusteeMap[p2].length > max) {
                max = trusteeMap[p2].length;
                judge = p2;
            }
        }

        if (trusteeMap[judge] && trusteeMap[judge].length == n - 1 && !trusterMap[judge])
            return judge;

        return -1;
    }
}
