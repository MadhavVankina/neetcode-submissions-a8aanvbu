class Solution {
    public boolean isValid(String str) {
        Stack<Character> s = new Stack<>();

        for(char c : str.toCharArray()){
            if(c == '}' || c == ']' || c == ')'){
                if(s.isEmpty()){
                    return false;
                }else{
                    s.pop();
                }
            }else{
                s.add(c);
            }
        }

        return s.isEmpty();
    }
}
