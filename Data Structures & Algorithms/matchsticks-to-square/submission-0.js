class Solution {
    /**
     * @param {number[]} matchsticks
     * @return {boolean}
     */

    // [0, 0, 0, 0]
    // [1] 
    // [1, 1] 

    makesquare(matchsticks) {
        const sum = matchsticks.reduce((c, a) => c + a, 0);
        if(sum % 4 !== 0) return false;

        const length = sum / 4;

        const sides = [0, 0, 0, 0];

        matchsticks.sort((a, b) => b - a);

        const backtrack = (i) => {
            if(i == matchsticks.length){
                return true;
            }

            for(let j = 0; j < 4; j++){
                if(sides[j] + matchsticks[i] <= length){
                    sides[j] += matchsticks[i];
                    if(backtrack(i + 1)){
                        return true;
                    }
                    sides[j] -= matchsticks[i];
                }
            }

            return false;
        }

        return backtrack(0);    
    }
}
