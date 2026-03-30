class Solution {

    public String decodeString(String s) {
        Stack<String> stack = new Stack<>();
     

        for(char c : s.toCharArray()){
            if(c == ']'){
                StringBuilder word = new StringBuilder();
                while(!stack.peek().equals("[") ){
                    word.insert(0, stack.pop());  
                }

                stack.pop();
                // check for int
                StringBuilder mulStr = new StringBuilder();
                while(!stack.isEmpty() && Character.isDigit(stack.peek().charAt(0))){
                    mulStr.insert(0, stack.pop()); 
                }

                int multiple = Integer.parseInt(mulStr.toString());

                String completeWord = word.toString().repeat(multiple);

                stack.push(completeWord);
            }else{
                stack.push(String.valueOf(c));
            }
        }

        StringBuilder res = new StringBuilder();
        while(!stack.isEmpty()){
            res.insert(0, stack.pop());
        }
        return res.toString();
    }
}