class Solution {
    public int splitArray(int[] nums, int k) {
        int l = 0;
        int r = 0;

        for(int n : nums){
            l = Math.max(l, n);
            r += n;
        }

        int res = r;

        while(l <= r){
            int m = l + (r - l) / 2;

            if(canSplit(m, nums, k)){
                res = m;
                r = m - 1;
            }else{
                l = m + 1;
            }
        }

        return res;
    }

    private boolean canSplit(int largest, int[] nums, int k){
        int subArray = 1;
        int currSum = 0;

        for(int n : nums){
            currSum += n;
            if(currSum > largest){
                subArray++;
                if(subArray > k) return false;
                currSum = n;
            }
        }

        return true;
    } 
}