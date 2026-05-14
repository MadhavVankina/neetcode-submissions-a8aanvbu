class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // [1, 1, 2, 2, 3, 3] => [1, 2]
        // [1,1, 2, 2, 3, 3, 3] => [1, 2]

        const m = {};
        const pq = new PriorityQueue((a, b) => b[0] - a[0]);
        for (let n of nums) {
            m[n] = (m[n] || 0) + 1;
            pq.enqueue([n, m[n]]);

        }


        for (const [num, cnt] of Object.entries(m)) {
            pq.enqueue([cnt, num]);

            if (pq.size() > k) {
                pq.dequeue();
            }
        }

         const res = [];
        for (let i = 0; i < k; i++) {
            const [num, cnt] = pq.dequeue();
            res.push(num);
        }

        return res;



    }
}
