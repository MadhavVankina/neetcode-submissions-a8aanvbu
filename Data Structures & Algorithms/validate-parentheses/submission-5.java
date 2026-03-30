class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for(char c : s.toCharArray()){
            if(c == ')'){
                if(stack.isEmpty()) return false;
                char curr = stack.pop();
                if(curr != '(') return false;
            }else if(c == ']'){
                if(stack.isEmpty()) return false;
                char curr = stack.pop();
                if(curr != '[') return false;
            }else if(c == '}'){
                if(stack.isEmpty()) return false;
                char curr = stack.pop();
                if(curr != '{') return false;
            }else{
                stack.push(c);
            }
        }

        return stack.isEmpty();
    }
}
