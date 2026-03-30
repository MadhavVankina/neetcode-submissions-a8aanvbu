class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int[] A = nums1; int[] B = nums2;
        int total = A.length + B.length;
        int half = (total + 1) / 2;

        if(B.length < A.length){
            int[] temp = A;
            A = B;
            B = temp; 
        }

        int l = 0; 
        int r = A.length; // Explain this

        while(l <= r){
            int m = (l + r) / 2;
            int j = half - m;

            int Aleft = m > 0 ? A[m - 1] : Integer.MIN_VALUE;
            int Aright = m < A.length ? A[m] : Integer.MAX_VALUE;
            int Bleft = j > 0 ? B[j - 1] : Integer.MIN_VALUE;
            int Bright = j < B.length ? B[j] : Integer.MAX_VALUE;

            if(Aleft <= Bright && Bleft <= Aright){
                if(total % 2 == 0){
                    return (double) (Math.max(Aleft, Bleft) + Math.min(Aright, Bright))/2;
                }

                return Math.max(Aleft, Bleft);
            }else if(Aleft > Bright){
                r = m - 1;
            }else{
                l = m + 1;
            }
        }

        return -1;


    }
}
