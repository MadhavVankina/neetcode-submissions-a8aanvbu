class Solution {
    public List<Integer> majorityElement(int[] nums) {
        Map<Integer, Integer> count = new HashMap<>();
        

        // *** Important logic *** 
        // - We apply Boyer Moore's algorithm to solve this
        // - Boyer Moore Algorithm helps us to find the numbers that are 
        //   (n/k)-th times mejority in size from a array
        // Note : If you want to find (n/k)-th majority elements from a 
        //        array, know that at max you can only have (k - 1) elements as result
        for(int n : nums){
            count.put(n, count.getOrDefault(n, 0) + 1);

            if(count.size() > 2){
                Map<Integer, Integer> newCount = new HashMap<>();

                for(Map.Entry<Integer, Integer> entry : count.entrySet()){
                    if(entry.getValue() > 1){
                        newCount.put(entry.getKey(), entry.getValue() - 1);
                    }
                }

                count = newCount;
            }
        }

        // Verify the count
        List<Integer> res = new ArrayList<>();
        for(int key : count.keySet()){
            int freq = 0;
            for(int n : nums){
                if(n == key){
                    freq++;
                }
            }

            if(freq > (nums.length / 3)){
                res.add(key);
            }
        }

        return res;


    }
}