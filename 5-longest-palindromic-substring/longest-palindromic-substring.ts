function longestPalindrome(s: string): string {
    if(s.length < 2 ) return s;
    let start=0;
    let end=0;
    const ex=(left:number,right:number):void => {
        while (left >=0 && right < s.length && s[left]===s[right]){
            left--;
            right++;
        }
        if(right-left-1 > end -start){
            start=left+1;
            end=right -1;
        }
    };
    for (let i=0;i< s.length;i++){
        ex(i,i);
        ex(i,i+1);
    }
    return s.substring(start,end+1);
};