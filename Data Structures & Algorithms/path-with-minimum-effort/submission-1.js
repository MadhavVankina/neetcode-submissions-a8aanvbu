class Solution {
    /**
     * @param {number[][]} heights
     * @return {number}
     */
    minimumEffortPath(heights) {
        const [row, col] = [heights.length, heights[0].length];
        if (row == 1 && col == 1) return 0;

        const dir = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
        ];
        const pq = new PriorityQueue((a, b) => a[2] - b[2]);
        const efforts = Array.from({ length: row }, () => Array(col).fill(Infinity));

        pq.enqueue([0, 0, 0]);

        while (!pq.isEmpty()) {
            const [r, c, effort] = pq.dequeue();
            if(effort > efforts[r][c]) continue;

            if(r == row - 1 && c == col - 1) return effort;

            for (let [dr, dc] of dir) {
                const [nr, nc] = [dr + r, dc + c];

                if (nr < 0 || nc < 0 || nr == row || nc == col) continue;

                const abs = Math.abs(heights[r][c] - heights[nr][nc]);
                const newEffort = Math.max(effort, abs);
                
                if(newEffort < efforts[nr][nc]){
                    efforts[nr][nc] = newEffort;
                    pq.enqueue([nr, nc, newEffort]);
                }
            }
        }

        return -1;
    }
}
