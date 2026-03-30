class Solution {
    public int[] twoSum(int[] numbers, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();

        for (int n = 0; n < numbers.length; n++) {
            int complement = target - numbers[n];

            if (map.containsKey(complement)) {
                return new int[]{map.get(complement) + 1, n + 1};
            }

            map.put(numbers[n], n);
        }

        return new int[2];
    }
}
