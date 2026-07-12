class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
    // Map each closing bracket to its corresponding opening bracket
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        // If the character is a closing bracket
        if (bracketMap[char]) {
            // Get the top element from the stack, or a dummy value if empty
            const topElement = stack.length > 0 ? stack.pop() : '#';
            
            // If it doesn't match the required opening bracket, it's invalid
            if (bracketMap[char] !== topElement) {
                return false;
            }
        } else {
            // It's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }
    
    // If the stack is empty, all brackets were matched correctly
    return stack.length === 0;
    }
}
