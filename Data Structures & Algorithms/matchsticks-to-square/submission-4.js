class Solution {
    /**
     * @param {number[]} matchsticks
     * @return {boolean}
     */
    makesquare(matchsticks) {
        const sum = matchsticks.reduce((a, b) => a + b, 0);
        if (sum % 4 !== 0) return false;

        const sides = Array(4).fill(0);
        const length = sum / 4;

        matchsticks.sort((a, b) => b - a);

        const dfs = (i) => {
            if (i === matchsticks.length) {
                return true;
            }

            for (let j = 0; j < 4; j++) {
                if(sides[j] + matchsticks[i] <= length){
                sides[j] += matchsticks[i];
                if (dfs(i + 1)) return true;
                sides[j] -= matchsticks[i];
                }
            }

            return false;
        };

        return dfs(0);
    }
}
