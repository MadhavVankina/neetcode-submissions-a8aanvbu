class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(n, prereq, queries) {
        const adjmap = Array.from({ length: n }, () => []);
        const memo = Array.from({ length: n }, () => new Map());

        for(let [a, b] of prereq){
            adjmap[a].push(b);
        }

        const DFS = (curr, target) => {
            if(curr === target) return true;
            if(memo[curr].has(target)) return memo[curr].get(target);

            for(let a of adjmap[curr]){
                if(DFS(a, target)){
                    memo[curr].set(target, true);
                    return true;
                }
            }

            memo[curr].set(target, false);
            return false;
        }

        const result = [];
        for(let [curr, target] of queries){
            const res = DFS(curr, target);
            result.push(res);
        }

        return result;
    }
}
