class Solution {

    Map<Integer, List<Integer>> preMap = new HashMap<>();
    Set<Integer> visited = new HashSet<>();

    public boolean canFinish(int numCourses, int[][] prerequisites) {
        for(int i = 0; i < numCourses; i++){
            preMap.put(i, new ArrayList<>());
        }

        for(int[] pre : prerequisites){
            preMap.get(pre[0]).add(pre[1]);
        }

        for(int i = 0; i < numCourses; i++){
            if(!dfs(i)){
                return false;
            }
        }

        return true;
    }

    private boolean dfs(int crs){
        // Detect Cycle -> false
        if(visited.contains(crs)){
            return false;
        }

        //Has an empty list -> true
        if(preMap.get(crs).isEmpty()){
            return true;
        }

        visited.add(crs);
        for(int curr : preMap.get(crs)){
            if(!dfs(curr)){
                return false;
            }
        }

        visited.remove(crs);
        preMap.put(crs, new ArrayList<>());
        return true;
    }
}
