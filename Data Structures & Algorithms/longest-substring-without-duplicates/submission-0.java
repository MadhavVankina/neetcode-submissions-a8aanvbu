class Solution {
    public int lengthOfLongestSubstring(String s) {
        HashSet<Character> set = new HashSet<>();
        int longestLen = 0;

        for(char c : s.toCharArray()){
            if(set.contains(c)){
                 if(longestLen < set.size()){
                    longestLen = set.size();
                }
                set.clear();
            }
            set.add(c);  
        }

          if(longestLen < set.size()){
                    longestLen = set.size();
        }

        return longestLen;


    }
}
