class Solution {
    /**
     * @param {number} k
     * @param {number} w
     * @param {number[]} profits
     * @param {number[]} capital
     * @return {number}
     */
    findMaximizedCapital(k, w, profits, capital) {
        const minPq = new PriorityQueue((a, b) => a[1] - b[1]);
        const maxPq = new PriorityQueue((a, b) => b - a);

        for (let i = 0; i < profits.length; i++) {
            minPq.enqueue([profits[i], capital[i]]);
        }

        while (k > 0) {
            while (!minPq.isEmpty() && minPq.front()[1] <= w) {
                maxPq.enqueue(minPq.dequeue()[0]);
            }

            if (maxPq.isEmpty()) break;

            const p = maxPq.dequeue();
            w += p;
            k--;
        }

        return w;
    }
}
