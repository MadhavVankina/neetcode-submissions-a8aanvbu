class Solution {
    private int[][] memo;

    public int change(int amount, int[] coins) {
        Arrays.sort(coins);
        memo = new int[coins.length + 1][amount + 1];
        for(int[] row :memo){
            Arrays.fill(row, -1);
        }

        return dfs(coins, 0, amount);
    }

    private int dfs(int[] coins, int i, int a){
        if(a == 0){
            return 1;
        }

        if(i >= coins.length){
            return 0;
        }

        if(memo[i][a] != -1) return memo[i][a];

        int res = 0;
        if(a >= coins[i]){
            res = dfs(coins, i + 1, a);
            res += dfs(coins, i, a - coins[i]);
        }
        return memo[i][a] = res;
    }
}
