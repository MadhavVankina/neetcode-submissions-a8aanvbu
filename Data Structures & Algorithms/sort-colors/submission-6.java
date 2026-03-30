class Solution {
    public void sortColors(int[] nums) {
        int l = 0, r = nums.length - 1;
        int i = 0;

        while(i <= r){
            if(nums[i] == 0){
                swap(nums ,i, l);
                l++;
            }else if(nums[i] == 2){
                swap(nums,i ,r);
                r--;
                i--;
            }

            i++;
        }
    }

    private void swap(int[] nums, int i, int j){
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}

// [2,0,2,1,1,0]   -> [0,0,2,1,1,2] 
// [il, , , , ,r]  -> [l,i, , ,r, ]

// [0,0,2,1,1,2]  -> [0,0,2,1,1,2]
// [l,i, , ,r, ]  -> [,l,i , ,r, ]

// [0,0,2,1,1,2] -> []

