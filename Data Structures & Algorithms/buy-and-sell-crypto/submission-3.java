class Solution {
    public int maxProfit(int[] prices) {
        int max = 0;
        int l = 0;
        int r = 1;
        while(r < prices.length){
            int profit = prices[r] - prices[l];
            if(profit < 0){
                l = r;
            }else{
                max = Math.max(max, profit);
            }

            r++;
        }

        return max;
    }
}
