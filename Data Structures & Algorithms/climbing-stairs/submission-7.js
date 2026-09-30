class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n <= 2) return n;

        let [one, two] = [1, 2];

        for(let i = 3; i <= n; i++){
            let temp = one;
            one = one + two;
            two = temp;
        }

        return one;
    }
}
