class Solution {
    /**
     * @param {number[]} matchsticks
     * @return {boolean}
     */
    makesquare(matchsticks) {
        const sum = matchsticks.reduce((a, b) => a + b, 0);
        if (sum % 4 !== 0) return false;

        const sides = Array(4).fill(0);
        const dfs = (i) => {
            if (i === matchsticks.length) {
                return (
                    sides[0] === sides[1] &&
                    sides[1] === sides[2] &&
                    sides[2] === sides[3]
                );
            }

            for (let j = 0; j < 4; j++) {
                sides[j] += matchsticks[i];
                if (dfs(i + 1)) return true;
                sides[j] -= matchsticks[i];
            }

            return false;
        };

        return dfs(0);
    }
}
