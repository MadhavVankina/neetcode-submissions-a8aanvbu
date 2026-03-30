class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const mq = new MinPriorityQueue();

        for(let n of nums){
            mq.enqueue(n);

            if(mq.size() > k){
                mq.dequeue()
            }
        }

        return mq.front();
    }
}
