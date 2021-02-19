function isPalindrome(string1) {
    const stringArray = string1.trim().toLowerCase().split('');
    console.log(stringArray)
    let lastPositionArray = stringArray.length - 1;

    for(let i = 0; i < stringArray.length - 1; i++) {
        console.log(`Primera palabra: ${stringArray[i]} - Ultima palabra: ${stringArray[lastPositionArray]}`);
        
        if(stringArray[i] === stringArray[lastPositionArray]) {
            lastPositionArray--;
        } else {
            return false;
        }
    }
    return true;
}

const string1 = '  anitaLAVAlatisna         ';
if(isPalindrome(string1)) {
    console.log('Is a palindrome :D');
} else {
    console.log('Is not a palindrome :o');
}