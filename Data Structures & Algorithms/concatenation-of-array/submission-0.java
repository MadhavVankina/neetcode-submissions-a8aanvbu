class Solution {
    public int[] getConcatenation(int[] nums) {
        int[] res = new int[2*nums.length];

        for(int i = 0; i < res.length; i++){
            if(i < nums.length){
                res[i] = nums[i];
            }else{
                res[i] = nums[i - nums.length];
            }
            
        }

        return res;
    }
}