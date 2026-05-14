class Solution {
    public int[] twoSum(int[] numbers, int target) {
        HashSet<Integer> set = new HashSet<>();

        for(int n : numbers){
            if(set.contains(target - n)){
                return new int[]{target - n, n};
            }

            set.add(n); 
        }

        return new int[2];
    }
}
