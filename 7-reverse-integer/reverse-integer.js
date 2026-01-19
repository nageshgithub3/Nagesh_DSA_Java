/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let xCopy=x;
    x = Math.abs(x);
    let rev = 0;
    while (x > 0) {
        let rem = x % 10;
        rev = rev * 10 + rem;
        x = Math.floor(x / 10);
    }
    //if(rev < -(2**31) || rev > (2**31 - 1)) return 0;
    let limit = Math.pow(2,31);
    if(rev < -limit || rev >limit-1) return 0;
    return xCopy < 0 ?-rev:rev;
};