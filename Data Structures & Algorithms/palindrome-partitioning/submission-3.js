class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    
    // aab
    // [a, a, b]
    // [aa, b]
    // [a, ab]
    // [aab]

    // [a] 
    // [a, a] [aa]
    // [a, a, b] [a, ab] [aa, b] [aab]



    partition(s) {
        const res = [];

        const substring = (curr, i) => {
            if(s.length == i) {
                res.push([...curr]);
                return;
            }

            curr.push(s[i]);
            substring(curr, i + 1);
            curr.pop();
            curr[curr.length - 1] = curr[curr.length - 1] + s[i];
            if(this.isPalindrome(curr[curr.length - 1])){
                substring(curr, i + 1);
            }

        }

        if(s.length == 0) return []
        substring([s[0]], 1);
        return res;
    }


    isPalindrome(s){
        let [l, r] = [0, s.length - 1];
        while(l < r) {
            if(s[l] != s[r]) return false;
            l++;
            r--;
        }
        return true;
    }
}
