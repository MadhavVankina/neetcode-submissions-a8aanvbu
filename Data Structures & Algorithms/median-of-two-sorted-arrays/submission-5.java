class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int[] A = nums1;
        int[] B = nums2;
        int total = A.length + B.length;
        int half = (total + 1) / 2;

        if(B.length < A.length){
            int[] temp = A;
            A = B;
            B = temp;
        } 

        int l = 0; int r = A.length;

        while(l <= r){
            int a = (l + r) / 2;
            int b = half - a;

            int Aleft = a > 0 ? A[a - 1] : Integer.MIN_VALUE;
            int Aright = a < A.length ? A[a] : Integer.MAX_VALUE;
            int Bleft = b > 0 ? B[b - 1] : Integer.MIN_VALUE;
            int Bright = b < B.length ? B[b] : Integer.MAX_VALUE;

            if(Aleft <= Bright && Bleft <= Aright){
                if(total % 2 == 0){
                    return (double) (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
                }

                return (double) Math.max(Aleft, Bleft);
            }else if(Aleft > Bright){
                r = a - 1;
            }else{
                l = a + 1;
            }
        }

        return -1;
    }
}
