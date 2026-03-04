/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(t) {

    let stack = [];

    const map = {
        "+" : (a,b) => (b+a),
        "-" : (a,b) => (b-a),
        "*" : (a,b) => (b*a),
        "/" : (a,b) => Math.trunc(b/a)
    }

    for(let i=0;i<t.length;i++){
        if(map[t[i]]){

            let a = stack.pop();
            let b = stack.pop();

            let ans = map[t[i]](Number(a),Number(b));
            stack.push(ans);
            
        }else{
            stack.push(t[i]);
        }
    }
    return Number(stack[0]);
    
};