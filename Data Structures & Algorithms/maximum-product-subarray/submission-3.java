class Solution {
    public int maxProduct(int[] nums) {
       int res = Integer.MIN_VALUE;

       int currMin = 1, currMax = 1;

       for(int num : nums){
            
            int temp = currMax*num;
            currMax = Math.max(Math.max(num*currMax, num*currMin), num);
            currMin = Math.min(Math.min(temp, num*currMin), num);

            res = Math.max(res, currMax);
       }

       return res;
    
    }
}
