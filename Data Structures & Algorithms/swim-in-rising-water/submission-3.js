class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    // [
    //     [ 0, 1, 2, 3, 4],
    //     [24,23,22,21, 5],
    //     [12,13,14,15,16],
    //     [11,17,18,19,20],
    //     [10, 9, 8, 7, 6]
    // ]
    swimInWater(grid) {
        const row = grid.length;
        const col = grid[0].length;

        const visited = Array.from({ length: row }, () => Array(col).fill(false));

        const pq = new PriorityQueue((a, b) => a[0] - b[0]);

        const dir = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
        ];

        pq.enqueue([grid[0][0], 0, 0]);
        visited[0][0] = true;
        while (!pq.isEmpty()) {
            const [weight, r, c] = pq.dequeue();
            if (r == row - 1 && c == col - 1) return weight;
            for (let [rd, cd] of dir) {
                const [nr, nc] = [r + rd, c + cd];
                if (nr < 0 || nc < 0 || nr == row || nc == col || visited[nr][nc]) continue;

                pq.enqueue([Math.max(grid[nr][nc], weight), nr, nc]);
                visited[nr][nc] = true;
            }
        }

        return -1;
    }
}
