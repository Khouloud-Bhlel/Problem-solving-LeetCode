// class ListNode {
//     val: number;
//     next: ListNode | null;
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = val === undefined ? 0 : val;
//         this.next = next === undefined ? null : next;
//     }
// }

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const d=new ListNode(0);
    let c= d;
    let ca=0;
    while(l1 !== null || l2 !==null || ca!==0){
        const v1 =l1?.val ??0;
         const v2 =l2?.val ??0;
        
        const sum =v1+v2+ca;
        ca=Math.floor(sum/10);
        c.next =new ListNode(sum%10);
        c=c.next;
        if(l1 !==null) l1=l1.next;
         if(l2 !==null) l2=l2.next;
    }
return d.next;
};