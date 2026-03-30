class MinStack {

    Stack<Integer> stack;
    Stack<Integer> minStack;

    public MinStack() {
        stack = new Stack<>();
        minStack = new Stack<>();
    }
    
    public void push(int val) {
        stack.push(val);

        int newMin = val;
        if(!minStack.isEmpty()){
            newMin =  Math.min(newMin, minStack.peek());
        }

        minStack.push(newMin);
    }
    
    public void pop() {

        if(stack.isEmpty()) return;
        
        minStack.pop();

        stack.pop();
    }
    
    public int top() {
        return stack.peek();
    }
    
    public int getMin() {
        return minStack.peek();
    }
}
