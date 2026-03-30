class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const m = new Map();



        for (let str of strs) {
            const letterArr = new Array(26).fill(0);

            for (let i = 0; i < str.length; i++) {
                letterArr[str.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
            }


            const res = letterArr.join(",");

            if (!m.has(res)) {
                m.set(res, []);
            }

            const arr =  m.get(res);

            m.set(res, [...arr, str]);

        }


        const finalArr = [];

        for (let [_, values] of m.entries()) {
            finalArr.push(values);
        }


        return finalArr;


    }
}
