class Solution {
    public boolean isAnagram(String s, String t) {
        Set<Character> set = new HashSet<>();

        for(char c : s.toCharArray()){
            set.add(c);
        }

        for(char c : t.toCharArray()){
            set.remove(c);
        }

        return set.isEmpty();
    }
}
