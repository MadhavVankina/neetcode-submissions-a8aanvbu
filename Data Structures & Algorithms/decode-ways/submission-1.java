class Solution {
    public int numDecodings(String s) {
        int count = 0;
        char[] sArr = s.toCharArray();

        for(int i = 0; i < sArr.length; i++){
            if(i == 0 && sArr[i] == '0'){
                return 0;
            }

            if(sArr[i] == '0' && (sArr[i - 1] != '1' && sArr[i - 1] != '2')){
                return 0;
            }

            if(sArr[i] == '1'){
                if(i + 1 < sArr.length && Character.getNumericValue(sArr[i + 1]) >= 1 && Character.getNumericValue(sArr[i + 1]) <= 9){
                     count++;
                }  
            }

            if(sArr[i] == '2'&& i + 1 < sArr.length && Character.getNumericValue(sArr[i + 1]) >= 1 && Character.getNumericValue(sArr[i + 1]) <= 6){
                count++;
            }

        }

        count++;

        return count;


    }
}
