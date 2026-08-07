class Solution {
    /**
     * @param {string[][]} accounts
     * @return {string[][]}
     */
    accountsMerge(accounts) {
        const n = accounts.length;
        const parents = Array.from({ length: n }, (_, i) => i);
        const ranks = Array(n).fill(1);

        // we are finding and unionizing the accIds in this problem.
        const find = (x) => {
            if(x !== parents[x]){
                parents[x] = find(parents[x]);
            }

            return parents[x];
        }

        
        const union = (a, b) => {
            const p1 = find(a);
            const p2 = find(b);

            if(p1 != p2){
                if(ranks[p2] > ranks[p1]){
                    parents[p1] = p2;
                    ranks[p2] += 1; // ranks[p1];
                }else{
                    parents[p2] = p1;
                    ranks[p1] += 1; // ranks[p2];
                }
            }
        }

        const emailToAcc = new Map();

        for(let i = 0; i < n; i++){
            for(let j = 1; j < accounts[i].length; j++){
                const email = accounts[i][j];
                if(emailToAcc.has(email)){
                    union(i, emailToAcc.get(email));
                }else{  
                    emailToAcc.set(email, i);
                }
            }
        }

        const emailGroup = new Map();

        for(let [email, accId] of emailToAcc.entries()){
            const leader = find(accId);
            if(!emailGroup.has(leader)){
                emailGroup.set(leader, []);
            }

            emailGroup.get(leader).push(email);
        }

        const result = [];
        for(let [accId, emails] of emailGroup.entries()){
            emails.sort();
            result.push([accounts[accId][0], ...emails]);
        }

        return result;

        
    }
}
