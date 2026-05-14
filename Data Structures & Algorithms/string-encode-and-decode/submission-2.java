class Solution {

    public String encode(List<String> strs) {
        return String.join("#", strs);
    }

    public List<String> decode(String str) {
        return new ArrayList<>(Arrays.asList(str.split("#")));
    }
}
