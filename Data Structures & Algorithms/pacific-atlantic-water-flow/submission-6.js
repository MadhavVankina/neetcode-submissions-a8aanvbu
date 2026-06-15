class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const row = heights.length;
        const col = heights[0].length;

        const pac = Array.from({ length: row }, () => Array(col).fill(false));
        const atl = Array.from({ length: row }, () => Array(col).fill(false));

        const pq = [];
        const aq = [];

        for (let r = 0; r < row; r++) {
            pq.push([r, 0, -1]);
            aq.push([r, col - 1, -1]);
        }

        for(let c = 0; c < col; c++){
            pq.push([0, c, -1]);
            aq.push([row - 1, c, -1]);
        }

        while (pq.length > 0) {
            const length = pq.length;
            for (let i = 0; i < length; i++) {
                const [r, c, prev] = pq.shift();

                if (r < 0 || c < 0 || r == row || c == col || prev > heights[r][c] || pac[r][c]) continue;

                pac[r][c] = true;
                pq.push([r + 1, c, heights[r][c]]);
                pq.push([r - 1, c, heights[r][c]]);
                pq.push([r, c + 1, heights[r][c]]);
                pq.push([r, c - 1, heights[r][c]]);
            }   
        }

        while (aq.length > 0) {
            const length = aq.length;
            for (let i = 0; i < length; i++) {
                const [r, c, prev] = aq.shift();

                if (r < 0 || c < 0 || r == row || c == col || prev > heights[r][c] || atl[r][c]) continue;

                atl[r][c] = true;
                aq.push([r + 1, c, heights[r][c]]);
                aq.push([r - 1, c, heights[r][c]]);
                aq.push([r, c + 1, heights[r][c]]);
                aq.push([r, c - 1, heights[r][c]]);
            }   
        }

        const res = [];
        for(let r = 0; r < row; r++){
            for(let c = 0; c < col; c++){
                if(pac[r][c] && atl[r][c]){
                    res.push([r, c]);
                }
            }
        }

        return res;
    }
}
