class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */

    canFinish(numCourses, prerequisites) {
        const adjMap = Array.from({ length: numCourses }, () => []);
        const visit = new Set();

        for(let [a, b] of prerequisites){
            adjMap[a].push(b);
        }

        const dfs = (n) => {
            if(visit.has(n)) return false;

            if(adjMap[n].length === 0){
                return true;
            }

            visit.add(n)
            for(let a of adjMap[n]){
                if(!dfs(a)){
                    return false;
                }
            }
            
            visit.delete(n);
            adjMap[n] = [];
            return true;
        }

        for(let i = 0; i < numCourses; i++){
            if(!dfs(i)){
                return false;
            }
        }

        return true;
    }
}