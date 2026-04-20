class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */

    // 34
    // d e f
    // dg dh di eg eh ei fg fh fi

    letterCombinations(digits) {
        const digitToLettersMap = {
            2: 'abc',
            3: 'def',
            4: 'ghi',
            5: 'jkl',
            6: 'mno',
            7: 'qprs',
            8: 'tuv',
            9: 'wxyz'
        }

        const res = [];

        const backtrack = (i, curr) => {

            if(digits.length === 0) return res;

            if(i == digits.length){
                res.push([curr]);
                return;
            }

            const iLetters = digitToLettersMap[digits[i]];
            for(let l of iLetters){
                backtrack(i + 1, curr + l);
            }
        }
        backtrack(0,'');

        return res;





    }
}
