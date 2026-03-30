class Solution {
    public int lengthOfLongestSubstring(String s) {

        if(s.length() == 1 || s.length() == 0){
            return s.length();
        }

        HashSet<Character> set = new HashSet<>();

        int l = 0;
        int res = 0;

        for(int r = 0; r < s.length(); r++){
            while(set.contains(s.charAt(r))){
                set.remove(s.charAt(l));
                l++;
            }

            set.add(s.charAt(r));
            res = res < set.size() ? set.size() : res;  
        }

        return res;

    }
}
