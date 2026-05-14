class Solution {
    /**
     * @param {number[][]} trips
     * @param {number} capacity
     * @return {boolean}
     */

    // [[4, 1, 2], [3, 2, 4]] cap - 4
    // start - 1, availCap - 0
    // 1, 2, 4
    // [4] [0]-[3] [0] -> true

    // [[2, 1, 3], [3, 2, 4]] c=4
    // 1,  2,  3,  4
    //[2] [5] -> false

    // {1: add(2)}
    // {2: add(3)}
    // {3: remove(2)}
    // {4: remove(3)}

    carPooling(trips, capacity) {
        const timeline = new Array(1001).fill(0);

        for (const [numPassengers, start, end] of trips) {
            timeline[start] += numPassengers;
            timeline[end] -= numPassengers;
        }

        let currentLoad = 0;
        for (const change of timeline) {
            currentLoad += change;
            if (currentLoad > capacity) {
                return false;
            }
        }

        return true;
    }
}
