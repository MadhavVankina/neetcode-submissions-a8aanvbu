class Solution {
    public int shipWithinDays(int[] weights, int days) {
        int l = 0;
        int r = 0;

        for(int w : weights){
            l = Math.max(l, w);
            r += w;
        }

        int res = r;

        while(l <= r){
            int m = l + (r - l) / 2;

            if(helper(weights, days, m)){
                res = m;
                r = m - 1;
            }else{
                l = m + 1;
            }
        }

        return res;
    }


    private boolean helper(int[] weights, int maxDays, int maxWeight){
        int currWeight = 0;
        int currDays = 1;

        for(int w : weights){
            currWeight += w;

            if(currWeight > maxWeight){
                currDays++;
                currWeight = w;
            }

            if(currDays > maxDays){
                return false;
            }
        }

        return true;
    }
}