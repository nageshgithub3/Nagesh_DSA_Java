/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // trim all the spaces at the end
    let n = s.length-1;

    while(n>=0){

        if(s[n]!=" ") break;
        --n;
        /*
        if(s[n]===" "){
            --n;
        }else{
            break;
        }*/
    }
    

    // count all the character till you reach a space
    let count = 0;
    while(n>=0){

        if(s[n]===" ") break;
        --n;
        count++;
        /*
        if(s[n]!=" "){
            --n;
            count++;
        }else{
            break;
        }*/
    }
    return count;
    
};