class Solution {
    public int characterReplacement(String s, int k) {
        Map<Character, Integer> map = new HashMap<>();

        int res = 0;
        int max = 0, i = 0, j = 0;

        while(j < s.length()){
            char jc = s.charAt(j);
            char ic = s.charAt(i);
            int currLen = j - i + 1;

            map.put(jc, map.getOrDefault(jc, 0) + 1);
            max = Math.max(map.get(jc), max);

            while(currLen - max  > k){
                map.put(ic, map.get(ic) - 1);
                currLen = j - i + 1;
                i++;
            }

            
            
            res = Math.max(currLen, res);

            j++;

        }

        return res;


    }
}
