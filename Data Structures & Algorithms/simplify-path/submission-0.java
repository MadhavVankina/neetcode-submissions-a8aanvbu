class Solution {
    public String simplifyPath(String path) {
        StringBuilder sb = new StringBuilder();
        Stack<String> stack = new Stack<>();

        for(char c : (path + "/").toCharArray()){
            if(c == '/'){
                if(sb.toString().equals("..")){
                    if(!stack.isEmpty()) stack.pop();
                }else if(!sb.toString().equals("") && !sb.toString().equals(".")){
                    stack.push(sb.toString());
                }

                sb.setLength(0);
            }else{
                sb.append(c);
            }
        }

        return "/" + String.join("/", stack);
    }
}