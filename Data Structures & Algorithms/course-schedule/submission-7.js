class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */

    canFinish(numCourses, prerequisites) {
        const adjMap = Array.from({ length: numCourses }, () => []);
        const visited = new Set();

        for(let [a, b] of prerequisites){
            adjMap[a].push(b);
        }

        const DFS = (n) => {
            if(visited.has(n)) return false;
            if(adjMap[n].length === 0) return true;

            visited.add(n)

            for(let a of adjMap[n]){
                if(!DFS(a)) return false;
            }
            adjMap[n] = [];
            visited.delete(n);
            return true;

        }
        for(let i = 0; i < numCourses; i++){
            if(!DFS(i)) return false;
        }

        return true;
    }
}