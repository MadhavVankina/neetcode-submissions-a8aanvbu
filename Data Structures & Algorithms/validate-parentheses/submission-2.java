class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        HashMap<Character, Character> map = new HashMap<>(3);

        map.put(')', '(');
        map.put(']', '[');
        map.put('}', '{');

        for(char c : s.toCharArray()){
            if(map.containsKey(c)){
                if(!stack.isEmpty() && map.get(c).equals(stack.peek())){
                    stack.pop();
                }else{
                    return false;
                }
            }else{
                stack.push(c);
            }
        }

        return stack.isEmpty();
    }
}
