class Solution {
    public int calPoints(String[] operations) {
        Stack<Integer> sb = new Stack<>();
        for(String s : operations){
            if(s.equals("D")){
                int last = sb.peek();
                sb.push(last * 2);
            }else if(s.equals("C")){
                sb.pop();
            }else if(s.equals("+")){
                int top = sb.pop();
                int newTop = top + sb.peek();
                sb.push(top);
                sb.push(newTop);
            }else{
                int curr = Integer.parseInt(s);
                sb.push(curr);
            }
        }

        int sum = 0;
        for(int n : sb){
            sum += n;
        }


        return sum;
    }
}