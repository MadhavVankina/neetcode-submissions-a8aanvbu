class Solution {
    public int characterReplacement(String s, int k) {
        int l = 0;
        int res = 0;

        int freq = 0;

        Map<Character, Integer> mp = new HashMap<>();

        for(int r = 0; r < s.length(); r++){
            mp.put(s.charAt(r), mp.getOrDefault(s.charAt(r), 0) + 1);
            freq = Math.max(freq, mp.get(s.charAt(r)));
            while(((r - l) + 1) - freq > k){
                mp.put(s.charAt(l), mp.get(s.charAt(l)) - 1);
                l++;
            }

            res = Math.max((r-l) + 1, res);
        }

        return res;
    }
}
