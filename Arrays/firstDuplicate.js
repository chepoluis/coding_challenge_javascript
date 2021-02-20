function firstDuplicate(a) {
    let hashTable = {};
    
    for(let i = 0; i < a.length; i++) {
        const number = a[i];
        
        if (number in hashTable) {
            return number;
        } else {
            hashTable[number] = 1; 
        }
        
    }
    return -1;
}

console.log(firstDuplicate([1,2,3,5,4,4,1]));
