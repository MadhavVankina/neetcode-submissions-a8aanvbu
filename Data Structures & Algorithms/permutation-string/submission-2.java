class Solution {
    public boolean checkInclusion(String s1, String s2) {
        if(s1.length() > s2.length()) return false;


        int[] s1Arr = new int[26];
        int[] s2Arr = new int[26];

        for(char c : s1.toCharArray()){
            s1Arr[c - 'a'] += 1;
        }

        int l = 0;
        int r = 0;

        while(r < s2.length()){
            s2Arr[s2.charAt(r) - 'a']++;

            if((r - l) + 1 == s1.length()){
                if(Arrays.equals(s1Arr, s2Arr)) return true;

                s2Arr[s2.charAt(l++) - 'a']--;
            }

            r++;
        }


        return false;
    }
}
