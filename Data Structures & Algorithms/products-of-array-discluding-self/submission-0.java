class Solution {
    public int[] productExceptSelf(int[] nums) {
        int [] res = new int[nums.length]; 

        for(int i = 0; i < res.length; i++){
            res[i] = 1;
        }

        int product = 1;
        for(int i = 1; i < res.length; i++){
            product *= nums[i - 1];
            res[i] = product * res[i];
        }

        product = 1;

        for(int i = res.length - 2; i >= 0; i--){
            product *= nums[i + 1];
            res[i] = product * res[i]; 
        }

        return res;
        
    }
}  
