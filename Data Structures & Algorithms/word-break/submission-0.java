class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        char[] charArr = s.toCharArray();

        Map<Character, Integer> map = new HashMap<>();

        for(char c : charArr){
            map.put(c, map.getOrDefault(c, 0) + 1);
        }

        for(String word : wordDict){
            for(char c : word.toCharArray()){
                if(map.containsKey(c)){
                    if(map.get(c) > 0){
                        map.put(c, map.get(c) - 1);
                    }else{ 
                        return false;
                    }
                }else{
                    return false;
                }
            }
        }

        return true;
    }
}
