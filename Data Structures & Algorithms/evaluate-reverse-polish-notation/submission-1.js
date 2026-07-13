class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
    //     const stack1 = tokens
    //     const stack2 = []
    //     let temp = null
    //     const op = {
    //         '+': "+",
    //         '-': "-",
    //         '*': "*",
    //         '/': "/",
    //     }

    //     while (stack1.length !== 0) {
    //         stack2.push(stack1.pop())
    //     }
    //     while (stack2.length !== 0) {
    //         if (op[stack2[stack2.length - 1]]) {
    //             stack1.push(eval(stack1.pop() + stack2.pop() + temp))
    //         } else {
    //             if (stack1.length !== 0) {
    //                 temp = stack2.pop()
    //             } else {
    //                 stack1.push(stack2.pop())
    //             }
    //         }
            
    //     }
    //     return stack1.pop()
    const stack = [];

        for (let token of tokens) {
            if (token === "+") {
                stack.push(stack.pop() + stack.pop());
            } else if (token === "-") {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(a - b); // Order matters: a comes before b
            } else if (token === "*") {
                stack.push(stack.pop() * stack.pop());
            } else if (token === "/") {
                const b = stack.pop();
                const a = stack.pop();
                // Math.trunc handles truncation toward zero for negative numbers
                stack.push(Math.trunc(a / b)); 
            } else {
                // Token is a number, convert it from string to integer
                stack.push(Number(token));
            }
        }

        return stack.pop();
    }
}
