class FreqStack {

    private int max;
    private Map<Integer, Stack<Integer>> stacks;
    private Map<Integer, Integer> counts;

    public FreqStack() {
        max = 0;
        stacks = new HashMap<>();
        counts = new HashMap<>();
    }
    
    public void push(int val) {
        int currCount =  counts.getOrDefault(val, 0) + 1;
        counts.put(val, currCount);
        
        stacks.putIfAbsent(currCount, new Stack<>());
        stacks.get(currCount).push(val);

        max = Math.max(max, currCount);
    }
    
    public int pop() {
        int res = stacks.get(max).pop();
        counts.put(res, counts.get(res) - 1);
        if(stacks.get(max).size() == 0){
            max--;
        }
        return res;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * FreqStack obj = new FreqStack();
 * obj.push(val);
 * int param_2 = obj.pop();
 */