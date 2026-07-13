class MinStack {
    constructor() {
        this.stack = []
        this.min = null
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length === 0) {
            this.min = val
        } else {
            if (this.min > val) {
                this.min = val
            }
        }
        this.stack.push(val)
        return this.stack
    }

    /**
     * @return {void}
     */
    pop() {
        const len = this.stack.length
        if (len === 0) return null
        if (this.min === this.top()) {
            let temp = this.stack[0]
            for (let i = 0; i < len - 1; i++) {
                if (temp > this.stack[i]) temp = this.stack[i]
            }
            this.min = temp
        }
        return this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        const len = this.stack.length
        if (len === 0) return null
        return this.stack[len - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min
    }
}
