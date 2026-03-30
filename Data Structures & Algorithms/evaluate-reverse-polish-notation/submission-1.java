class Solution {
    public int evalRPN(String[] tokens) {
        Stack<Integer> stack = new Stack<>();

        for(String s : tokens){
            if(s.equals("+") || s.equals("-") || s.equals("*") || s.equals("/")){
                int i = stack.pop();
                int j = stack.pop();

                if(s.equals("+")){
                    stack.push(i + j);
                }

                if(s.equals("-")){
                    stack.push(j - i);
                }

                if(s.equals("*")){
                    stack.push(i * j);
                }

                if(s.equals("/")){
                    stack.push(j / i);
                }
            }else{
                int sInt = Integer.parseInt(s);
                stack.push(sInt);
            }
        }

        return stack.pop();
    }
}
