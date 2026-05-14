class Solution {
    public int lengthOfLongestSubstring(String s) {
        if(s.equals(" ")){
            return 0;
        }

        Map<Character, Integer> mp = new HashMap<>();
        int l = 0;
        int res = 0;

        for(int r = 0; r < s.length(); r++){
            if(mp.containsKey(s.charAt(r))){
                l = mp.get(s.charAt(r));
            }

            mp.put(s.charAt(r), r);
            res = Math.max(res, r - l);
        }

        return res;

    }
}
