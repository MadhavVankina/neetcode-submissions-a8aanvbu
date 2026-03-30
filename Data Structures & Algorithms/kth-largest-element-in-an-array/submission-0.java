class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();

        for(int n : nums){
            minHeap.offer(-n);
        }
        int res = 0;
        while(k != 0){
            int curr = minHeap.poll();
            res = curr;
            k--;
        }

        return -res;

    }
}
