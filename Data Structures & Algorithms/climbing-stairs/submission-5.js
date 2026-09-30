class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const cache = {};
        const dfs = (i) => {
            if(i >= n) return i == n;
            if(cache[i]) return cache[i];
            cache[i] = dfs(i + 1) + dfs(i + 2);
            return cache[i];
        }

        return dfs(0);
    }
}
