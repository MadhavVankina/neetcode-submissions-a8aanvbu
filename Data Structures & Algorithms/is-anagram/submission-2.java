class Solution {
    public boolean isAnagram(String s, String t) {
        int[] sArray = new int[26];
        int[] tArray = new int[26];

        for(char c : s.toCharArray()){
            sArray[c - 'a']++;
        }

        for(char c : t.toCharArray()){
            tArray[c - 'a']++;
        }

        return Arrays.toString(sArray).equals(Arrays.toString(tArray));
    }
}
