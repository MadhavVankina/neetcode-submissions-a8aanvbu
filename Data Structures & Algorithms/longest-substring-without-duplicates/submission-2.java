class Solution {
    public int lengthOfLongestSubstring(String s) {
        
        if(s.length() == 0){
            return 0;
        }

        int max = 1;

        Set<Character> set = new HashSet<>();

        int i = 0;
        int j = 1;

        set.add(s.charAt(i));

        while(j < s.length()){
            if(!set.contains(s.charAt(j))){
                set.add(s.charAt(j));
                j++;
            }else{
                set.remove(s.charAt(i));
                i++;
            }

            max = Math.max(max, j - i);

        }

        return max;
    }
}
