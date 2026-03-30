class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        for (const num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        const heap = new MinPriorityQueue((a) => a[1]);

        for (const [num, cnt] of Object.entries(count)) {
            heap.enqueue([num, cnt]);
            if(heap.size() > k) heap.dequeue();
        }

        const res = [];

        for(let i = 0; i < k; i++){
            const [num, _] = heap.dequeue();

            res.push(num);
        }

        return res;

    }
}
