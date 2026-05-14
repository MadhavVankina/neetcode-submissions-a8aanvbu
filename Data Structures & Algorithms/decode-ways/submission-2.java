class Solution {
    public int numDecodings(String s) {
        int count = 0;
        char[] sArr = s.toCharArray();

        int i = sArr.length - 1;

        while (i >= 0) {
            if (i == 0 && sArr[i] == '0') {
                return 0;
            }

            if (sArr[i] == '0' && (i - 1 >= 0 && sArr[i - 1] != '1' && sArr[i - 1] != '2')) {
                return 0;
            } else if (sArr[i] == '0') {
                i--; // To skip the pair processing.
            }

            if (i >= 0 && sArr[i] == '1') {
                if (i + 1 < sArr.length && Character.getNumericValue(sArr[i + 1]) >= 1 
                    && Character.getNumericValue(sArr[i + 1]) <= 9) {
                    count++;
                }
            }

            if (i >= 0 && sArr[i] == '2') {
                if (i + 1 < sArr.length && Character.getNumericValue(sArr[i + 1]) >= 1 
                    && Character.getNumericValue(sArr[i + 1]) <= 6) {
                    count++;
                }
            }

            i--;
        }

        count++;
        return count;
    }
}
