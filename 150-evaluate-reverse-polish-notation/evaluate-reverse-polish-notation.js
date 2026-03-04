/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(t) {

    let stack = [];

    for(let i=0;i<t.length;i++){
        if(["+","-","/","*"].includes(t[i])){

            let a = stack.pop();
            let b = stack.pop();

            let ans = eval(`${b} ${t[i]} ${a}`);
            stack.push(Math.trunc(ans));
            
        }else{
            stack.push(t[i]);
        }
    }
    return Number(stack.pop());
    
};