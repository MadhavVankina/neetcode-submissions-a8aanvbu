class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        LinkedList<List<Integer>> sol = new LinkedList<List<Integer>>();

        for(int i = 0; i < nums.length - 2; i++){
            if(i == 0 || (i > 0 && nums[i] != nums[i-1])){
                int target = 0 - nums[i];
                int left = i + 1;
                int right = nums.length - 1;

                while(left < right){
                    if(target == nums[left] + nums[right]){
                        sol.add(List.of(nums[i], nums[left], nums[right]));
                        
                        while(left < right && nums[left] == nums[left + 1]){
                            left++;
                        }

                        while(left < right && nums[right] == nums[right - 1]){
                            right--;
                        }

                        left++;
                        right--;
                    }else if(target > nums[left] + nums[right]){
                        left++;
                    }else{
                        right--;
                    }

                }
            }
        }

        return sol;
    }
}
