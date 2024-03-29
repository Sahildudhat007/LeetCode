{
    function plusOne(digits) {
        let carry = 1;
        for (let i = digits.length - 1; i >= 0; i--) {
            let sum = digits[i] + carry;
            digits[i] = sum % 10;
            carry = Math.floor(sum / 10);
        }
        if (carry > 0) {
            digits.unshift(carry);
        }
        return digits;
    }
    let digits = [1, 2, 3];
    // let digits = [4, 3, 2, 1];
    // let digits = [9];
    let result = plusOne(digits);
    console.log(result);
}