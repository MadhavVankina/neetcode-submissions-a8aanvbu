class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const row = grid.length;
        const col = grid[0].length;

        const visited = Array.from({ length: row }, () => Array(col).fill(false));

        const pq = new MinPriorityQueue((a) => a[0]);

        pq.enqueue([grid[0][0], 0, 0]);

        while (!pq.isEmpty()) {
            const [weight, r, c] = pq.dequeue();
            if (r == row - 1 && c == col - 1) return weight;
            visited[r][c] == true;
            console.log(r, c);
            if (r + 1 !== row && !visited[r + 1][c])
                pq.enqueue([Math.max(weight, grid[r + 1][c]), r + 1, c]);
            if (c + 1 !== col && !visited[r][c + 1])
                pq.enqueue([Math.max(weight, grid[r][c + 1]), r, c + 1]);
        }

        return -1;
    }
}
