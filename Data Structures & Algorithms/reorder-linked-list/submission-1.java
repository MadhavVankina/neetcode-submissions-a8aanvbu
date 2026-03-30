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
    public void reorderList(ListNode head) {
        ListNode slow = head;
        // why fast = head.next? 
        ListNode fast = head.next;
        

        // To get the mid node
        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;
        }

        ListNode second = slow.next;
        ListNode prev = slow.next = null;


        // Reversing the second set of node
        while(second != null){
            ListNode temp = second.next;
            second.next = prev;
            prev = second;
            second = temp;
        }

        ListNode first = head;
        second = prev;
        while(second != null){
            ListNode tem1 = first.next;
            ListNode tem2 = second.next;

            first.next = second;
            second.next = tem1;

            first = tem1;
            second = tem2;
        }


    }
}
