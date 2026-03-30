class Solution {
    public int maxProfit(int[] prices) {
        int maxProfit = 0;
        int currProfit = 0;

        int j = 1;

        while(j < prices.length){
            if(currProfit < 0){
                currProfit = 0;
            }

            currProfit += prices[j] - prices[j - 1];
            maxProfit = Math.max(maxProfit, currProfit);
            j++;
        }

        return maxProfit;
    }
}
