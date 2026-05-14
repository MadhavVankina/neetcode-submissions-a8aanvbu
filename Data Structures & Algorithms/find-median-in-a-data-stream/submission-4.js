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
        if(this.maxQ.size() === 0){
            this.maxQ.enqueue(num)
            return
        }

        if ((this.maxQ.size() + this.minQ.size()) % 2 === 0) {
            const prev = this.minQ.dequeue();
            this.minQ.enqueue(num);
            this.maxQ.enqueue(prev);
            return
        }

        this.minQ.enqueue(num);
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

        return  this.maxQ.front()
    }
}
