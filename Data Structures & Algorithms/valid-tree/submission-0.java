class Solution {
    public boolean validTree(int n, int[][] edges) {
        Map<Integer, List<Integer>> adj = new HashMap<>();

        for(int i = 0; i < n; i ++){
            adj.put(i, new ArrayList<>());
        }

        for(int[] edge : edges){
            adj.get(edge[0]).add(edge[1]);
            adj.get(edge[1]).add(edge[0]);
        }

        Set<Integer> visit = new HashSet<>();
        
        if(!dfs(-1, 0, adj, visit)){
            return false;
        };

        return visit.size() == n;

    }


    private boolean dfs(int prev, int curr, Map<Integer, List<Integer>> adj, Set<Integer> visit){

        if(visit.contains(curr)){
            return false;
        }

        visit.add(curr);

        for(int n : adj.get(curr)){
            if(n == prev){
                continue;
            }

            if(!dfs(curr, n, adj, visit)){
                return false;
            }
        }

        return true;
    }
}
