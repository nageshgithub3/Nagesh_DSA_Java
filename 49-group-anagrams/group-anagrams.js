/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(s) {

    let map={};

    for(let i=0;i<s.length;i++){
        let sortedString = s[i].split("").sort().join("");

        if(!map[sortedString]){
            map[sortedString] = [s[i]];
        }else{
            map[sortedString].push(s[i]);   
        }
    }
    return [...Object.values(map)];
    
};