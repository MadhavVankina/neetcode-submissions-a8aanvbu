class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> set = new HashSet<>();

        for(int n : nums){
            set.add(n);
        }
        int max = 0;
        int count = 0;

        for(int n : nums){
            if(set.contains(n - 1)){
                continue;
            }else{
                count++;
                int i = n + 1;
                while(set.contains(i)){
                    count++;
                    i++;
                }
            }

            max = Math.max(count, max);
            count = 0;
        }

        return max;
    }
}
