class MedianFinder {
    constructor() {
        this.minQ = new PriorityQueue((a, b) => b - a);
        this.maxQ = new PriorityQueue((a, b) => a - b);
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
        if(this.maxQ.isEmpty() || num > this.maxQ.front()){
            this.maxQ.enqueue(num)
        }else{
            this.minQ.enqueue(num)
        }

        if(this.minQ.size() > this.maxQ.size() + 1){
            this.maxQ.enqueue(this.minQ.dequeue())
        }else if(this.maxQ.size() > this.minQ.size() + 1){
            this.minQ.enqueue(this.maxQ.dequeue())
        }

    }

    /**
     * @return {number}
     */
    findMedian() {
        // odd case
        if(this.maxQ.size() > this.minQ.size()){
            return this.maxQ.front()
        }else if(this.minQ.size() > this.maxQ.size()){
            return this.minQ.front()
        }else{
            // even case
            const m1 = this.maxQ.front()
            const m2 = this.minQ.front()

            return (m1 + m2) / 2
        }

    }
}
