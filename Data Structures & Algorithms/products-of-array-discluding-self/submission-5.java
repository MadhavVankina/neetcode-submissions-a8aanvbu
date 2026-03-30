class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] res = new int[n];

        res[0] = 1;

        for(int i = 1; i < n; i++){
            res[i] = res[i - 1] * nums[i - 1];
        }
        
        int p = nums[n - 1];

        for(int i = n - 2; i >= 0; i--){
            res[i] *= p;
            p *= nums[i];
        }

        return res;
    }


    // [1, 2, 3, 4]
    // [1, 0, 0, 0] (res)

    
    // res[i] = res[i - 1] * nums[]

    // [1, 1, 2, 6]
    // postfix = num[len - 1];
    // [1, 1 , 8, 6] p -> 4
    // p -> p * nums[i] -> 4 * 3
    // p -> 12
    // [1, 12, 8, 6] p-> 12
    // p -> 12 * 2 -> 24
    // [24, 12, 8, 6] p-> 24

    // space : res.size -> n -> O(n)
    // time : for(nums.len) -> for(nums.len) -> 2n -> O(n)


}  
