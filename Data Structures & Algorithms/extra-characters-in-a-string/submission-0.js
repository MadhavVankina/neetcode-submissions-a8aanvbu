class Solution {
    /**
     * @param {string} s
     * @param {string[]} dictionary
     * @return {number}
     */

    // neetcodes

    minExtraChar(s, dictionary) {
        const backtrack = (i) => {
            if(i == s.length) return 0;

            let res = 1 + backtrack(i + 1);

            for(let w of dictionary){
                const j = w.length;

                if(s.slice(i, j) === w){
                    res = Math.min(res, backtrack(j));
                }
            }

            return res;
        }

        return backtrack(0);
    }
}
