class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const maxh = new PriorityQueue((a, b) => b[0] - a[0]);
        const map = {};

        for (let t of tasks) {
            map[t] = (map[t] || 0) + 1;
        }

        for (let [key, value] of Object.entries(map)) {
            maxh.enqueue([value, key]);
        }

        const q = new Queue();

        let time = 0;


        while (!maxh.isEmpty() || !q.isEmpty()) {
            time++;
            if (!q.isEmpty() && q.front()[1] === time) {
                const [count, _releaseTime, task] = q.dequeue();
                maxh.enqueue([count, task]);
            }

            if (!maxh.isEmpty()) {
                let [count, task] = maxh.dequeue();
                count--;
                if (count > 0) {

                    const releaseTime = time + n + 1;
                    q.enqueue([count, releaseTime, task]);
                }
            }
        }

        return time;

    }
}
