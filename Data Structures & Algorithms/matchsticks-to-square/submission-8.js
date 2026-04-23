class Solution {
    /**
     * @param {number[]} matchsticks
     * @return {boolean}
     */
    makesquare(matchsticks) {
        if(matchsticks.length < 4) return false;
        const sum = matchsticks.reduce((a, c) => a + c, 0);
        if(sum % 4 !== 0) return false;

        const length = sum / 4;

        const sides = Array(4).fill(0);
        matchsticks.sort((a, b) => b - a);

        const backtrack = (i) => {
            if(i === matchsticks.length) return true;

            for(let j = 0; j < 4; j++){

                if(j > 0 && sides[j] === sides[j-1]) continue;

                if(sides[j] + matchsticks[i] <= length){
                    sides[j] += matchsticks[i];
                    if(backtrack(i + 1)) return true;
                    sides[j] -= matchsticks[i];
                }
            }

            return false;
        }

        return backtrack(0);

    }

}
