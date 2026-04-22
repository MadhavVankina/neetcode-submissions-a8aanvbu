class Solution {
    /**
     * @param {number[]} matchsticks
     * @return {boolean}
     */
    makesquare(matchsticks) {
        const n = 4;
        const sum = matchsticks.reduce((a, c) => a + c, 0);
        if(sum % n !== 0 || matchsticks.length < n) return false;
        const length = sum / n;

        matchsticks.sort((a, b) => b - a);
        const sides = Array(4).fill(0);

        const backtrack = (i) => {
            if(i == matchsticks.length) return true;

            const currStick = matchsticks[i];
            for(let j = 0; j < n; j++){
                if (j > 0 && sides[j] === sides[j - 1]) continue;
                if(sides[j] + currStick <= length){
                    sides[j] += currStick;
                    if(backtrack(i + 1)) return true;
                    sides[j] -= currStick;
                }
            }

            return false;
        }

        return backtrack(0);
    }
}
