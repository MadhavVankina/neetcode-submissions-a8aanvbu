class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */

    // 0 -> 1 -> 2 -> 4
    //      3 -> 2 -> 4
    //           
    // 5
    findOrder(numCourses, prerequisites) {
        const adjmap = Array.from({ length: numCourses }, () => []);
        const result = [];
        const visited = new Set();

        for(let [a, b] of prerequisites){
            adjmap[a].push(b);
        }

        const DFS = (num) => {
            if(visited.has(num)) return false; // checks the cycle
            if(result.includes(num)) return true;

            visited.add(num);

            for(let a of adjmap[num]){
                if(!DFS(a)) return false;
            }

            visited.delete(num);
            result.push(num);
            return true;
        }

        for(let i = 0; i < numCourses; i++){
            if(!DFS(i)) return [];
        }

        return result;
    }
}
