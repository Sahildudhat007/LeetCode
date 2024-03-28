// Input: x = 121
// Output: true

{
    function isPalindrome(number) {
        let n = number;
        let sum = 0;
        while (n > 0) {
            let r = n % 10;
            sum = sum * 10 + r;
            n = Math.floor(n / 10)
        }
        return number === sum;
    }
    let num = 121;
    if (isPalindrome(num)) {
        console.log(num + " is a palindrome.")
    }
    else {
        console.log(num + " is not a palindrome.")
    }
}


// Input: x = -121
// Output: false

{
    function isPalindrome(number) {
        let n = number;
        let sum = 0;
        while (n > 0) {
            let r = n % 10;
            sum = sum * 10 + r;
            n = Math.floor(n / 10)
        }
        return number === sum;
    }
    let num = -121;
    if (isPalindrome(num)) {
        console.log(num + " is a palindrome.")
    }
    else {
        console.log(num + " is not a palindrome.")
    }
}
 

// Input: x = 10
// Output: false

{
    function isPalindrome(number) {
        let n = number;
        let sum = 0;
        while (n > 0) {
            let r = n % 10;
            sum = sum * 10 + r;
            n = Math.floor(n / 10)
        }
        return number === sum;
    }
    let num = 10;
    if (isPalindrome(num)) {
        console.log(num + " is a palindrome.")
    }
    else {
        console.log(num + " is not a palindrome.")
    }
}