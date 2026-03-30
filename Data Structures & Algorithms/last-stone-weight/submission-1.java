class Solution {
    public int lastStoneWeight(int[] stones) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        for(int s : stones){
            minHeap.offer(-s);
        }

        while(minHeap.size() > 1){
            int first = minHeap.poll();
            int second = minHeap.poll();
            
            int res = Math.abs(first - second);

            if(res != 0){
                minHeap.offer(-res);
            }
        }
        minHeap.offer(0);
        return  -minHeap.peek();
    }
}
