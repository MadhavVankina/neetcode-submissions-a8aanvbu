class Solution {
    public int evalRPN(String[] tokens) {
        Stack<Integer> stack = new Stack<>();

        for(String s : tokens){
            if(s.equals("+") || s.equals("-") || s.equals("*") || s.equals("/")){
                int num1 = stack.pop();
                int num2 = stack.pop();

                if(s.equals("+")){
                    stack.push(num1 + num2);
                }

                if(s.equals("-")){
                    stack.push(num2 - num1);
                }

                if(s.equals("*")){
                    stack.push(num1 * num2);
                }

                if(s.equals("/")){
                    stack.push(num2 / num1);
                }
            }else{
                stack.push(Integer.parseInt(s));
            }
        }

        return stack.pop();
    }
}
