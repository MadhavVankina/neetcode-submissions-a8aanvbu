class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int l = 0;
        int r = numbers.length - 1;

        int[] res = new int[2];
        while(l < r){
            int currTarget = numbers[l] + numbers[r];

            if(currTarget == target){
                return new int[]{l + 1, r + 1};
            }else if(currTarget < target){
                l++;
            }else{
                r--;
            }
        }   

        return res;
    }
}
