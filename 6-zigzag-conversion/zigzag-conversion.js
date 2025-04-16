/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    const rows = new Array(numRows).fill('');
    let cR = 0;
    let gD = false;

    for (let char of s) {
        rows[cR] += char;
        if (cR === 0 || cR === numRows - 1) {
            gD = !gD;
        }
        cR += gD ? 1 : -1;
    }

    return rows.join('');
};
