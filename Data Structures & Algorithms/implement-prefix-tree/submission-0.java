class PrefixTree {

    class PrefixTreeNode{
        private char value;
        private boolean isWord;
        private PrefixTreeNode[] childern;

        public PrefixTreeNode(char value){
            this.value = value;
            this.isWord = false;
            this.childern = new PrefixTreeNode[26];
        }
    }

    PrefixTreeNode root;

    public PrefixTree() {
         root = new PrefixTreeNode('\0');
    }

    public void insert(String word) {
        PrefixTreeNode curr = root;
        for(char x : word.toCharArray()){
            if(curr.childern[x - 'a']  == null){
                curr.childern[x - 'a'] = new PrefixTreeNode(x);
            }

            curr = curr.childern[x - 'a'];
        }

        curr.isWord = true;
    }

    public boolean search(String word){
        PrefixTreeNode res = getLast(word);
        return (res != null && res.isWord);
    }

    public PrefixTreeNode getLast(String word) {
        PrefixTreeNode curr = root;
        for(char x : word.toCharArray()){
            if(curr.childern[x - 'a'] == null){
                return null;
            }

            curr = curr.childern[x - 'a'];
        }

        return curr;
    }

    public boolean startsWith(String prefix) {
        PrefixTreeNode res = getLast(prefix);
        if(res == null) return false;
        return true;
    }
}
