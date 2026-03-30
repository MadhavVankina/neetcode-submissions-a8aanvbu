class Solution {
    StringBuilder stack;
    List<String> res;
    public List<String> generateParenthesis(int n) {
        stack = new StringBuilder();
        res = new ArrayList<>();
        backtrack(n ,0, 0);

        return res;
    }


    private void backtrack(int n, int open, int close){
        if(open == close && close == n){
            res.add(stack.toString());
            return;
        }

        if(open < n){
            stack.append('(');
            backtrack(n, open + 1, close);
            stack.deleteCharAt(stack.length() - 1);
        }

        if(close < open){
            stack.append(')');
            backtrack(n, open, close + 1);
            stack.deleteCharAt(stack.length() - 1);
        }

    }
}
