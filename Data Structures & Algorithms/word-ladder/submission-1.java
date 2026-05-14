class Solution {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        if(!wordList.contains(endWord) || beginWord.equals(endWord)) return 0;

        Set<String> set = new HashSet<>(wordList);
        int res = 0;
        Queue<String> q = new LinkedList<>();

        q.offer(beginWord);

        while(!q.isEmpty()){
            res++;
            for(int i = 0; i < q.size(); i++){
                String node = q.poll();

                if(endWord.equals(node)) return res;

                for(int j = 0; j < node.length(); j++){
                    for(char c = 'a'; c < 'z'; c++){
                        if(node.charAt(j) == c) continue;

                        String nei = node.substring(0, j) + c + node.substring(j + 1);

                        if(set.contains(nei)){
                            q.add(nei);
                            set.remove(nei);
                        }
                    }
                }
            }
        }

        return 0;
    }
}
