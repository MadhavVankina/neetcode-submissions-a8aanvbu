class Solution {
    public boolean checkInclusion(String s1, String s2) {
        
        if(s1.length() > s2.length()){
            return false;
        }

        int[] s1Arr = makeCharArr(s1);

        int l = 0;
        for(int r = s1.length() - 1; r < s2.length(); r++){
            int[] currArr = makeCharArr(s2.substring(l, r + 1));
            if(checkMatches(s1Arr, currArr)){
                return true;
            }
            l++;
        }

        return false;

    }

    public int[] makeCharArr(String s){

        int[] arr = new int[26];

        for(char c : s.toCharArray()){
            arr[c - 'a'] += 1;
        }

        return arr;
    }

    public boolean checkMatches(int[] arr1, int[] arr2){
        for(int i = 0; i < arr1.length; i++){
            if(arr1[i] != arr2[i]){
                return false;
            }
        }

        return true;
    }
}
