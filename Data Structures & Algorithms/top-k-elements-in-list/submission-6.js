class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let n = nums.length;
        const arr = Array.from({ length: n + 1 }, () => []);
        const count = {};

        for (const num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        for (const num in count) {
            arr[count[num]].push(parseInt(num));
        }


        const res = [];
        for (let i = arr.length - 1; i > 0; i--) {
            for (const n of arr[i]) {
                res.push(n);

                if (res.length === k) {
                    return res;
                }
            }
        }

        return res;
    }
}
