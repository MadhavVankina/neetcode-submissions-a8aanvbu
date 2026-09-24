class Solution {
    /**
     * @param {number[][]} heights
     * @return {number}
     */
    minimumEffortPath(heights) {
        const row = heights.length;
        const col = heights[0].length;
        
        if(row <= 1 && col <= 1) return 0;

        const visited = Array.from({ length: row }, () => Array(col).fill(false));

        const dir = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
        ];

        const pq = new PriorityQueue((a, b) => a[0] - b[0]);

        pq.enqueue([0, 0, 0]); // [effort, r, c]

        while (!pq.isEmpty()) {
            const [effort, r, c] = pq.dequeue();

            if (r === row - 1 && c === col - 1) return effort;
            if (visited[r][c]) continue;
            visited[r][c] = true;
            for (let [dr, dc] of dir) {
                const [nr, nc] = [r + dr, c + dc];

                if (nr < 0 || nc < 0 || nr == row || nc == col || visited[nr][nc]) continue;

                const maxDiffEffort = Math.abs(heights[r][c] - heights[nr][nc]);
                const newEffort = Math.max(maxDiffEffort, effort);
                pq.enqueue([newEffort, nr, nc]);
            }
        }

        return -1;
    }
}
