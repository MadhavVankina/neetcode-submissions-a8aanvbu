class Solution {
    public String mergeAlternately(String word1, String word2) {
        StringBuilder sb = new StringBuilder();
        int w1 = word1.length() - 1;
        int w2 = word2.length() - 1;
        int i = 0;
        int j = 0;

        while(i <= w1 && j <= w2){
            if(i == j){
                sb.append(word1.charAt(i++));
            }else{
                sb.append(word2.charAt(j++));
            }
        }

        while(i <= w1){
            sb.append(word1.charAt(i++));
        }

        while(j <= w2){
            sb.append(word2.charAt(j++));
        }

        return sb.toString();
    }
}