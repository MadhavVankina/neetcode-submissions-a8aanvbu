class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    // [
    //  [2, 2, 1],
    //  [2, 1, 0],
    //  [0, 1, 1],
    // ]
    orangesRotting(grid) {
        const row = grid.length;
        const col = grid[0].length;

        let count = 0;

        const sides = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        const q = [];

        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                if (grid[r][c] == 2) {
                    q.push([r, c]);
                }

                if (grid[r][c] == 1) {
                    count++;
                }
            }
        }

        let time = 0;
        

        while (q.length > 0) {
            const len = q.length;
            let currCount = count;
            for (let x = 0; x < len; x++) {
                const [rn, cn] = q.shift();
                for (let [i, j] of sides) {
                    const [r, c] = [rn + i, cn + j];
                    if (
                        r < 0 ||
                        c < 0 ||
                        r == row ||
                        c == col ||
                        grid[r][c] == 0 ||
                        grid[r][c] == 2
                    ) {
                        continue;
                    }

                    grid[r][c] = 2;
                    q.push([r, c]);
                    count--;
                }
            }
            if (count !== currCount) time++;
        }

        return count == 0 ? time : -1;
    }
}
