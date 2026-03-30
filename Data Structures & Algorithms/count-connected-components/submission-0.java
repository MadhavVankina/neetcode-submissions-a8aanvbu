class Solution {
    public int countComponents(int n, int[][] edges) {

        int count = 0;

        Map<Integer, List<Integer>> adj = new HashMap<>();

        for(int i = 0; i < n; i++){
            adj.put(i, new ArrayList<>());
        }

        for(int[] edge : edges){
            adj.get(edge[0]).add(edge[1]);
            adj.get(edge[1]).add(edge[0]);
        }

        Set<Integer> visited = new HashSet<>();

        for(int i = 0; i < n; i++){
            if(!visited.contains(i)){
                dfs(i, -1, visited, adj);
                count++;
            }
        }

        return count;

    }


    private void dfs(int curr, int prev, Set<Integer> visited, Map<Integer, List<Integer>> adj){

        if(visited.contains(curr)){
            return;
        }

        visited.add(curr);
        for(int n : adj.get(curr)){
            if(n == prev){
                continue;
            }

            dfs(n, curr, visited, adj);
        }

        return;
        
    }
}
