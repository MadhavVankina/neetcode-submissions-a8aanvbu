class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const m = new Map();

        for (let i = 0; i < nums.length; i++) {
            const req = target - nums[i];
            if (m.has(req)) {
                return [m.get(req), i];
            }
            m.set(nums[i], i);
        }

        return [];
    }
}
