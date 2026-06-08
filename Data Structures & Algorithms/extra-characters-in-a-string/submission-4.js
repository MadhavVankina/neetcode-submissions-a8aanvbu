class Solution {
    /**
     * @param {string} s
     * @param {string[]} dictionary
     * @return {number}
     */
    // neetcodes
    // [neet, code, neetcode]
    
    // n |eetcodes => 1
    // ne |etcodes => 2
    // nee |tcodes => 3
    // "neet" |codes => 0
    // "neet"c |odes => 1
    // "neet"co |des => 2
    // "neet"cod |es => 3
    // "neet""code" |s => 0
    // "neet""code"s | => 1

    minExtraChar(s, dictionary) {

        const cache = {};

        const backtrack = (i) => {
            if(i === s.length){
                return 0;
            }

            if(cache[i]) return cache[i];

            let res = 1 + backtrack(i + 1);

            for(const w of dictionary){
                const j = w.length;

                if(s.slice(i, i + j) === w){
                    res = Math.min(res, backtrack(i + j));
                }
            }

            cache[i] = res;
            return res;
        }

        return backtrack(0);
    }
}
