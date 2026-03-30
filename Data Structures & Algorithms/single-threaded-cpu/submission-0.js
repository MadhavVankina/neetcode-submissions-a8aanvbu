class Solution {
    /**
     * @param {number[][]} tasks
     * @return {number[]}
     */
    getOrder(tasks) {
        const n = tasks.length;
        tasks = tasks.map((t, i) => [...t, i]);
        tasks.sort((a, b) => a[0] - b[0]);

        const res = [];
        const minHeap = new PriorityQueue((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);

        let i = 0, time = tasks[0][0];

        while (minHeap.size() || i < n){
            while(i < n && time >= tasks[i][0]){
                minHeap.enqueue([tasks[i][1], tasks[i][2]]);
                i++;
            }

            if(minHeap.isEmpty()){
                time = tasks[i][0];
            }else{
                const [procTime, index] = minHeap.dequeue();
                time += procTime;
                res.push(index);
            }
        }

        return res;
    }
}
