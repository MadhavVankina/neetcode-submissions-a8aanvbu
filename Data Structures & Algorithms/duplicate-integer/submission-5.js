class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const s = new Set();
        
        for(let n of nums){
            if(s.has(n)){
                return true;
            }

            s.add(n);
        }

        return false;

    }
}
