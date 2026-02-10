/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {

    let res = [];

    for(let i=0;i<words.length;i++){
        // find char x present in the word or not

            for(let j=0;j<words[i].length;j++){
                if(words[i][j]==x){
                    res.push(i);
                    break;
                }
            }




        // if(words[i].includes(x)){
        //     res.push(i);
        // }
    }
    return res;
    
};