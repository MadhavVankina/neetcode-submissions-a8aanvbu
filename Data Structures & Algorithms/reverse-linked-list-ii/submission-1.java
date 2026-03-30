/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseBetween(ListNode head, int left, int right) {
        ListNode dummy = new ListNode(0, head);
        ListNode prev = dummy;

        for(int i = 1; i < left; i++){
            prev = prev.next;
        }

        ListNode initialPrev = prev;

        ListNode l = prev.next;

        while(left <= right){
            ListNode ln = l.next;
            l.next = prev;
            prev = l;
            l = ln;
            left++;
        }

        ListNode start = initialPrev.next;

        start.next = l;

        initialPrev.next = prev;


        return dummy.next;

        
    }
}