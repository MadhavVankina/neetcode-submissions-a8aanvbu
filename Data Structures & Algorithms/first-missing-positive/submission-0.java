class Solution {
    public int firstMissingPositive(int[] nums) {
        int n = nums.length;
        for(int i = 0; i < n; i++){
            if(nums[i] < 0){
                nums[i] = 0;
            }
        }   

        // *** The important part of the problem ***

        // - We definitely know that the result lies between 0 and n + 1
        // - So we are using the given array nums to mark if a particular 
        //   numbers exists in the array bu marking the (i-th - 1) index to negative value    
        for(int i = 0; i < n; i++){
            int curr = Math.abs(nums[i]);
            // check if its n - 1
            if(1 <= curr && curr <= n){
                if (nums[curr - 1] > 0){
                    nums[curr - 1] *= -1;
                }else if(nums[curr - 1] == 0){
                    nums[curr - 1] = (n + 1) * (-1);
                }
                
            }
        }

        // Now if know the ith index's values that are negative exists in the array
        for(int i = 1; i <= n; i++){
            if(nums[i - 1] >= 0){
                return i;
            }
        }

        return n + 1;
    }
}