class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const minHeap = new MaxPriorityQueue();

        for(const stone of stones){
            minHeap.enqueue(stone);
        }

        while(minHeap.size() > 1){
            const first = minHeap.dequeue();
            const second = minHeap.dequeue();

            const res = Math.abs(first - second);

            if(res !== 0){
                minHeap.enqueue(res);
            }
        }

        if(minHeap.isEmpty()){
            return 0;
        }

        return minHeap.dequeue();
    }
}
