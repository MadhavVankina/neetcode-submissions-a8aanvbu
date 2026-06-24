class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {
        const visit = new Set(deadends);
        if (visit.has("0000")) return -1;

        const children = (lock) => {
            const res = [];

            for (let i = 0; i < 4; i++) {
                const digit = parseInt(lock[i]);
                const up = lock.slice(0, i) + ((digit + 1) % 10) + lock.slice(i + 1);
                const down = lock.slice(0, i) + ((digit + 9) % 10) + lock.slice(i + 1);
                res.push(up, down);
            }

            return res;
        };

        const q = new Queue();
        q.push(["0000", 0]);

        while (!q.isEmpty()) {
            const [lock, num] = q.pop();
            if (lock === target) return num;
            if (visit.has(lock)) continue;

            visit.add(lock);

            for (let child of children(lock)) {
                q.push([child, num + 1]);
            }
        }

        return -1;
    }
}
