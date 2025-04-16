function lengthOfLongestSubstring(s: string): number {
    let m=0;
    const c=new Map<string, number>();
    let si=0;

    for (let e=0;e< s.length; e++) {
        const char=s[e];
        if(c.has(char) && c.get(char)! >= si) {
        si=c.get(char)!+1;
    }
        c.set(char,e) ;
        m=Math.max(m,e-si+1);   
    }
return m
};