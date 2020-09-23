/* Write your class below */

class MinStack {
    constructor() {
        this.stack = []
        this.length = 0
        this.obj = {}
    }

    push(x) {
        this.stack[this.length] = x
        this.length++
        this.obj[x] = x
    }
    pop() {
        const last = this.stack[this.length - 1]
        this.stack.splice((this.length - 1), 1)
        this.length = this.length > 0 ? this.length - 1 : 0
        delete this.obj[last]
        return last
    }
    peek() {
        return this.stack[this.length - 1] || null
    }
    isEmpty() {
        return this.length === 0
    }
    print() {
        console.log(this.stack)
    }
    getMin() {
        if (this.length > 0) {
            let arr = Object.values(this.obj);
            let min = Math.min(...arr);

            return min
        } else {
            return null
        }
    }

}

let ms = new MinStack()
ms.push(17)
ms.push(12)
ms.push(31)
console.log(ms.getMin())    //12
ms.pop()
ms.pop()
ms.pop()
console.log(ms.getMin())    //null
ms.push(19)
ms.push(21)
console.log(ms.getMin())    //19
ms.push(3)
console.log(ms.getMin())    //3
ms.pop()
ms.pop()
console.log(ms.getMin())    //19




/* Do not remove the exports below */
module.exports = MinStack