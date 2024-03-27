// Input: s = "the sky is blue"
// Output: "blue is sky the"

function reverseWords(s) {
    let words = s.trim().split(/\s+/);
    let reverseWords = words.reverse();
    return reverseWords.join(' ');
}

let s = "the sky is blue";
// let s = "  hello world  ";
// let s = "a good  example";
console.log(reverseWords(s));