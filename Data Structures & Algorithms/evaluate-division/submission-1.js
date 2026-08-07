class Solution {
    /**
     * @param {string[][]} equations
     * @param {number[]} values
     * @param {string[][]} queries
     * @return {number[]}
     */

    calcEquation(equations, values, queries) {
        const n = equations.length;
        const adj = new Map();

        for(let i = 0; i < n; i++){
            const [a, b] = equations[i];
            const val = values[i];

            if(!adj.has(a)){
                adj.set(a, []);
            }
            
            if(!adj.has(b)){
                adj.set(b, []);
            }
            adj.get(a).push([b, val]);
            adj.get(b).push([a, 1/val]);
        }

        // adj map is done.

        const dfs = (curr, target, val, parent, visit) => {
            if(curr === target) return val;
            if(visit.has(curr)) return -1.0;

            visit.add(curr);
            for(let [a, v] of adj.get(curr)){
                if(a !== parent){
                    const newVal = dfs(a, target, val * v, curr, visit);
                    if(newVal !== -1.0) return newVal;
                }
            }
            visit.delete(curr);
            return -1.0;
        }

        const result = [];
        for(let [curr, target] of queries){
            if(!adj.has(curr) || !adj.has(target)){
                result.push(-1.0);
                continue;
            }
            const val = dfs(curr, target, 1, -1, new Set());
            result.push(val);
        }

        return result;
    }
}
