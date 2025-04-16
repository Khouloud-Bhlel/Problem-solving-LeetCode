/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const s = x < 0 ? -1 : 1;
    x = Math.abs(x);

    let r = 0;
    while (x !== 0) {
        const d = x % 10;
        r = r * 10 + d;
        x = Math.floor(x / 10);
    }

    r *= s;

    if (r < Math.pow(-2, 31) || r > Math.pow(2, 31) - 1) {
        return 0;
    }

    return r;
};
