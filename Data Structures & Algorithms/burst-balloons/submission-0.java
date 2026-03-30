class Solution {
    private int[][] dp;

    public int maxCoins(int[] nums) {
        dp = new int[nums.length + 2][nums.length + 2];
        int[] newNums = new int[nums.length + 2];
        newNums[0] = newNums[nums.length + 1] = 1;

        for(int i = 0; i < dp.length; i++){
            for(int j = 0; j < dp[0].length; j++){
                dp[i][j] = -1;
            }
        }

        for(int i = 0; i < nums.length; i++){
            newNums[i + 1] = nums[i];
        }

        return dfs(1, nums.length, newNums);
    }

    private int dfs(int i, int j,int[] a){

        if(dp[i][j] != -1) return dp[i][j];

        if(i > j) return 0;
        int maxi = Integer.MIN_VALUE;

        for(int ind = i; ind <= j; ind++){
            int cost = a[i - 1] * a[ind] * a[j + 1] + dfs(i, ind - 1, a) + dfs(ind + 1, j, a);
            maxi = Math.max(maxi, cost);
        }


        return dp[i][j] = maxi;
    }

}
