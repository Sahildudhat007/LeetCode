function isValid(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(")");
        }
        else if (s[i] === "{") {
            stack.push("}");
        }
        else if (s[i] === "[") {
            stack.push("]");
        }
        else {
            const top = stack.pop();
            if (s[i] !== top) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

const inputString1 = "()";
const inputString2 = "()[]{}";
const inputString3 = "(]";
console.log(isValid(inputString1)); 
console.log(isValid(inputString2));
console.log(isValid(inputString3));
