class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {string[]}
     */
    // neetcode - [code, neet]
    // --------
    // [code] [neet]
    // [x] [x] [neet code] [neet neet]
    // [x] [x] [right] [x]

    // racecariscar - [racecar, race, car, is]
    // [racecar](6) [race](3) [car](x) [is](x)
    // [racecar racecar](x) [racecar race](x) [racecar car](x) [racecar is](8) [race car](6)
    // [racecar is](8) [race car](6)
    // [racecar is car](11) [race car is](8)
    // [racecar is car](11) [race car is car](11)
    // O(m^)

    // [racecar, race, car, is]
    // (racecar, race, car, is) - set
    // racecar -> race car

    wordBreak(s, wordDict) {
        const res = [];

        const backtrack = (i, curr) => {
            if (i >= s.length) {
                res.push(curr.join(" "));
                return;
            }

            for (let w of wordDict) {
                if (w === s.substring(i, i + w.length)) {
                    curr.push(w);
                    backtrack(i + w.length, curr);
                    curr.pop();
                }
            }
        };

        backtrack(0, []);

        return res;
    }
}
