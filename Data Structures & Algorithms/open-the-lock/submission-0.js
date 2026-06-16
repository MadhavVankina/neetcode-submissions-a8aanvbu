class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    // {0: [9, 1]}
    // {1: [0, 2]}
    // {2: [1, 3]}
    // {3: [2, 4]}
    // {4: [3, 5]}
    // {5: [4, 6]}
    // {6: [5, 7]}
    // {7: [6, 8]}
    // {8: [7, 9]}
    // {9: [8, 0]}

    openLock(deadends, target) {
        const visited = new Set(deadends);
        if(visited.has('0000')) return -1;
        const digitMap = {
            0: [9, 1],
            1: [0, 2],
            2: [1, 3],
            3: [2, 4],
            4: [3, 5],
            5: [4, 6],
            6: [5, 7],
            7: [6, 8],
            8: [7, 9],
            9: [8, 0],
        };




        const children = (lock) => {
            const res = []
            for(let i = 0; i < 4; i++){
                const up = lock.slice(0, i) + digitMap[lock[i]][0] + lock.slice(i + 1);
                const down = lock.slice(0, i) + digitMap[lock[i]][1] + lock.slice(i + 1);

                res.push(up, down);
            }

            return res;
        }

        const q = [['0000', 0]]
        visited.add('0000');

        while(q.length > 0){
            const [lock, turns] = q.shift();

            if(lock == target) return turns;

            for(let child of children(lock)){
                if(!visited.has(child)){
                    q.push([child, turns + 1]);
                    visited.add(child);
                }
            }
        }

        return -1;


    }
}
