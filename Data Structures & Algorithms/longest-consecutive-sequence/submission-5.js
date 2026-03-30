class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // [2, 20, 4, 10, 3, 4, 5]
        const s = new Set();

        for (let n of nums) {
            s.add(n);
        }

        let max = 0;
        for (let n of nums) {
            let count = 1;
            if (!s.has(n - 1)) {
                while (s.has(n + count)) {
                    count++;
                }
            }
            max = Math.max(max, count);
        }

        return max;
    }
}
