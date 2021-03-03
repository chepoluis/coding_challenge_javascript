function splitString(string) {
    return string.split('').sort(function(a, b) {return a.localeCompare(b)});
}

function oneWay(string1, string2) {
    let cont = 0;
    let arr1 = 0;
    let arr2 = 0;

    const countLetterString1 = string1.split('').length;
    const countLetterString2 = string2.split('').length;

    if(countLetterString1 >= countLetterString2) {
        arr1 = splitString(string1);
        arr2 = splitString(string2);
    } else {
        arr1 = splitString(string2);
        arr2 = splitString(string1);
    }

    if((arr1.length - arr2.length) < 2) {
        for(let i = 0; i < arr2.length; i++) {
            if(arr1.includes(arr2[i])) {
                cont++;
            }
        }
 
        if((arr1.length - cont) === 1 || (arr1.length - cont) === 0) {
            return 'There is only one modification :D or there are no changes :D';
        } else {
            return 'There is more than 1 modification';
        }
        
    } else {
        return 'There is more than 1 modification';
    }
}

    
const string1 = 'hell';
const string2 = 'hellss';

console.log(oneWay(string1, string2));