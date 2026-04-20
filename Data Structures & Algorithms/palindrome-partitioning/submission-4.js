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
                for(let i = 0; i < curr.length; i++){
                    if(!this.isPalindrome(curr[i])) return;
                }
                res.push([...curr]);
                return;
            }

            curr.push(s[i]);
            substring(curr, i + 1);
            curr.pop();
            curr[curr.length - 1] = curr[curr.length - 1] + s[i];
            substring(curr, i + 1);

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
