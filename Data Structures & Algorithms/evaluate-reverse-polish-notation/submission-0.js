class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack1 = tokens
        const stack2 = []
        let temp = null
        const op = {
            '+': "+",
            '-': "-",
            '*': "*",
            '/': "/",
        }

        while (stack1.length !== 0) {
            stack2.push(stack1.pop())
        }
        while (stack2.length !== 0) {
            if (op[stack2[stack2.length - 1]]) {
                stack1.push(eval(stack1.pop() + stack2.pop() + temp))
            } else {
                if (stack1.length !== 0) {
                    temp = stack2.pop()
                } else {
                    stack1.push(stack2.pop())
                }
            }
            
        }
        return stack1.pop()
    }
}
