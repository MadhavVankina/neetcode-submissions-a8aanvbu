class Solution {
    public String mergeAlternately(String word1, String word2) {
        StringBuilder sb = new StringBuilder();
        int w1 = word1.length() - 1;
        int w2 = word2.length() - 1;
        int i = 0;
        int j = 0;

        while(i <= w1 || j <= w2){
            if(i <= w1){
                sb.append(word1.charAt(i++));
            }
            if(j <= w2){
                sb.append(word2.charAt(j++));
            }
        }

        return sb.toString();
    }
}