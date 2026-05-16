class MedianFinder {
    constructor() {
        this.minQ = new MinPriorityQueue();
        this.maxQ = new MaxPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */

    // [1, 2, 3, 4, 5]
    //  max.      min. 
    //  [1, 3, 2]

    //  [1] []
    //  [1] [3]
    //   

    addNum(num) {
        this.minQ.enqueue(num)

        if(this.minQ.size() - this.maxQ.size() > 1){
            const curr = this.minQ.dequeue()
            this.maxQ.enqueue(curr)
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if ((this.maxQ.size() + this.minQ.size()) % 2 === 0){
            const m1 = this.maxQ.front()
            const m2 = this.minQ.front()

            return (m1 + m2) / 2
        }

        return  this.minQ.front()
    }
}
