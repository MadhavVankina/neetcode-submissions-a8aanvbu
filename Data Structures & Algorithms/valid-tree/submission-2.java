class Solution {

    private Set<Integer> visited;

    public boolean validTree(int n, int[][] edges) {
        // Make adj list
        List<List<Integer>> adj = new ArrayList<>();
        visited = new HashSet<>();

        for(int i = 0; i < n; i++){
            adj.add(i, new ArrayList());
        }

        for(int[] edge : edges){
            adj.get(edge[0]).add(edge[1]);
            adj.get(edge[1]).add(edge[0]);
        } 

        for(int i = 0; i < n; i++){
            if(!DFS(adj, i, -1)){
                return false;
            }
        } 
       
        return true;

    }

    // Create a DFS function

    private boolean DFS(List<List<Integer>> adj, int curr, int prev){
        // Check if its a cycle ?
        if(visited.contains(curr)){
            return false;
        }

        visited.add(curr);
        for(int node : adj.get(curr)){
            if(node != prev){
                if(!DFS(adj, node, curr)){
                    return false;
                }
            }
        }

        visited.remove(curr);

        return true;
    }
}
