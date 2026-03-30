class Solution {
    public boolean isValidSudoku(char[][] board) {
        Map<Integer, Set<Character>> rowMap = new HashMap<>();
        Map<Integer, Set<Character>> colMap = new HashMap<>();
        Map<String, Set<Character>> subMatrixMap = new HashMap<>(); 

        for(int r = 0; r < board.length; r++){
            for(int c = 0; c < board[0].length; c++){
                
                char curr = board[r][c];

                if(curr == '.') continue;

                String str = (r / 3) + "_" + (c / 3);
                if(rowMap.computeIfAbsent(r, k -> new HashSet<>()).contains(curr) || 
                   colMap.computeIfAbsent(c, k -> new HashSet<>()).contains(curr) ||
                   subMatrixMap.computeIfAbsent(str, k -> new HashSet<>()).contains(curr)){
                        return false;
                }

                rowMap.get(r).add(curr);
                colMap.get(c).add(curr);
                subMatrixMap.get(str).add(curr);
            }
        }

        return true;
    }
}
