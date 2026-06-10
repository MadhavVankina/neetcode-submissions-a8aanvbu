class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */

    // {h: 0, l: 1, ..}
    // ..............
    // d -> 5 [dag] .
    // d -> 5 [disk] .
    // d -> 5 [dog] .
    // -------------
    // a -> 2  [dag] .
    // i -> 9  [disk] .
    // o -> 14 [dog] .

    // indexMap -> put all the chars(key) in map with its indices as value O(m)
    // iteration...
    // for(w of words){  }

    // dag , disk, dog

    isAlienSorted(words, order) {
        const indexMap = {};
        for (let i = 0; i < order.length; i++) {
            indexMap[order[i]] = i;
        }

        if (words.length === 1) return true;

        for (let j = 1; j < words.length; j++) {
            const prev = words[j - 1];
            const curr = words[j];

            for (let i = 0; i < prev.length; i++) {
                if (!curr[i] || indexMap[prev[i]] > indexMap[curr[i]]) {
                    return false;
                }

                if(indexMap[prev[i]] < indexMap[curr[i]]){
                    break;
                }
            }
        }

        return true;
    }
}
