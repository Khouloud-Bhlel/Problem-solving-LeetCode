function longestCommonPrefix(strs: string[]): string {
    if(strs.length===0) return "";
    let p=strs[0];
    for(let i=1;i<strs.length;i++ ){
        while (strs[i].indexOf(p)!==0){
            p=p.slice(0,-1);
            if(p==="") return "";
        }
    }
    return p;
};