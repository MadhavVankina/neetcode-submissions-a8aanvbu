class Solution {
    public int maxProduct(int[] nums) {
        int product = 1;
        int last = 0;
         

        for(int i = 0; i < nums.length; i++){
            if(nums[i] < 0){
                last = i;
            }

            product *= nums[i];
        }

        if(product > 0){
            return product;
        }
        
        int p1 = 1;
        int p2 = 1;
        int i = 0;
        while(i < last){
            p1 *= nums[i];
            i++;
        }

       i = last + 1;
        while(i < nums.length){
            p2 *= nums[i];
            i++;
        }

        return Math.max(p1, p2);
    
    }
}
