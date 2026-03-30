class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        List<List<Integer>> adj = new ArrayList<>();

        for(int i = 0; i < numCourses; i++){
            adj.add(new ArrayList<>());
        }

        for(int[] preq : prerequisites){
            adj.get(preq[0]).add(preq[1]);
        }

        int[] isVisited = new int[numCourses];

        for(int i = 0; i < adj.size(); i++){
            if(isVisited[i] == 0){
                if(isCyclic(adj, isVisited, i)){
                    return false;
                }
            }
        }
        return true;
    }

    public boolean isCyclic(List<List<Integer>> adj, int[] isVisited, int curr){
        if(isVisited[curr] == 2){
            return true;
        }

        isVisited[curr] = 2;

        for(int i = 0; i < adj.get(curr).size(); i++){
            if(isVisited[adj.get(curr).get(i)] != 1){
                if(isCyclic(adj, isVisited, adj.get(curr).get(i))){
                    return true;
                }
            }
        }

        isVisited[curr] = 1;
        return false;
    }
}
