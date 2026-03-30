class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = 0;
        int j = 0;

        List<Integer> temp = new ArrayList<>();

        while(i < m && j < n){
            if(nums1[i] < nums2[j]){
                temp.add(nums1[i]);
                i++;
            }else{
                temp.add(nums2[j]);
                j++;
            }
        }

        while(i < m){
            temp.add(nums1[i]);
            i++;
        }
        
        
        while(j < n){
            temp.add(nums2[j]);
            j++;
        }

        for(int a = 0; a < (n + m); a++){
            nums1[a] = temp.get(a);
        }
    }
}