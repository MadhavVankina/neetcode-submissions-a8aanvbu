class Solution {
    public boolean isValidSudoku(char[][] board) {
        Map<Integer, Set<Character>> row = new HashMap<>();
        Map<Integer, Set<Character>> col = new HashMap<>();
        Map<String, Set<Character>> box = new HashMap<>();

        for(int i = 0; i < 9; i++){
            row.put(i, new HashSet<>());
            col.put(i, new HashSet<>());
        }

        for(int i = 0; i < 3; i++){
            for(int j = 0; j < 3; j++){
                box.put("" + i + j, new HashSet<>());
            }            
        }

        for(int i = 0; i < 9; i++){
            for(int j = 0; j < 9; j++){
                char curr = board[i][j];
                if(curr != '.'){
                    if(row.get(i).contains(curr)){
                        return false;
                    }

                    row.get(i).add(curr);

                    if(col.get(j).contains(curr)){
                        return false;
                    }

                    col.get(j).add(curr);

                    String key = ""+  (i/3) + (j/3);

                    if(box.get(key).contains(curr)){
                        return false;
                    }

                    box.get(key).add(curr);

                }
            }
        }

        return true;
    }
}
