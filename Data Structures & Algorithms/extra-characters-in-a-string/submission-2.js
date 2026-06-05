class Solution {
    /**
     * @param {string} s
     * @param {string[]} dictionary
     * @return {number}
     */

    // leetscode
    // 1 

    minExtraChar(s, dictionary) {
        const backtrack = (i) => {
            if(i == s.length) return 0;

            let res = 1 + backtrack(i + 1);

            for(let w of dictionary){
                const j = w.length;

                if(i + j <= s.length && s.slice(i, i + j) === w){
                    res = Math.min(res, backtrack(i + j));
                }
            }

            return res;
        }

        return backtrack(0);
    }
}
