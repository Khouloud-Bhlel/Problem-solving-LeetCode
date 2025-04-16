function isPalindrome(x: number): boolean {

if(x < 0 ||( x % 10==0&&x!=0)){
    return false;
}    
let r=0;
let o=x;
while(x >  r){
    r=r*10+x%10;
    x=Math.floor(x/10);
}
return x===r||x===Math.floor(r/10);
};