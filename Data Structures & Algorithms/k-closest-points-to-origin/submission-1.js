class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const pq = new PriorityQueue((a, b) => b[0] - a[0]);

        for (const [x, y] of points) {
            const dist = x ** 2 + y ** 2;

            pq.enqueue([dist, x, y]);

            if(pq.size() > k){
                pq.dequeue();
            }
        }


        const res = [];

        for(const [_, x, y] of pq){
            res.push([x, y]);
        }

        return res;
    }
}
