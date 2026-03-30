class Solution {
    public int[] findOrder(int numCourses, int[][] prerequisites) {
        int[] indegree = new int[numCourses];
        List<List<Integer>> adj = new ArrayList<>();

        for(int i = 0; i < numCourses; i++){
            adj.add(i, new ArrayList<>());
        }

        for(int[] pre : prerequisites){
            indegree[pre[1]]++;
            adj.get(pre[0]).add(pre[1]);
        }

        Queue<Integer> q = new LinkedList<>();

        for(int i = 0; i < numCourses; i++){
            if(indegree[i] == 0){
                q.add(i);
            }
        }

        int index = 0;
        int[] order = new int[numCourses];
        while(!q.isEmpty()){
            int node = q.poll();
            order[numCourses - index - 1] = node;
            index++;
            for(int nei : adj.get(node)){
                indegree[nei]--;
                if(indegree[nei] == 0){
                    q.add(nei);
                }
            }
        }

        if (index != numCourses){
            return new int[0];
        }

        return order;
    }
}
