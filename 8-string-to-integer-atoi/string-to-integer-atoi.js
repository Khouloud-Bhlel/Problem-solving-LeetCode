/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    let n = s.length;
    
    while (i < n && s[i] === ' ') {
        i++;
    }

    let si = 1;
    if (i < n && (s[i] === '-' || s[i] === '+')) {
        si = (s[i] === '-') ? -1 : 1;
        i++;
    }

    let r = 0;
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        let d = s[i] - '0'; 
        r = r * 10 + d;
        i++;
    }

    r *= si;

    const INT_MIN = -Math.pow(2, 31);
    const INT_MAX = Math.pow(2, 31) - 1;
    if (r < INT_MIN) return INT_MIN;
    if (r > INT_MAX) return INT_MAX;

    return r;
};
