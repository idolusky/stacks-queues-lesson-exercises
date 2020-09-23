/* Write your class below */

class Queue {
    constructor() {
        this.queue = []
        this.length = 0
    }

    enqueue(x) {
        this.queue[this.length] = x
        this.length++
    }

    isEmpty() {
        return this.length === 0
    }

    peek() {
        if (this.length > 0) {
            return this.queue[0]
        } else {
            return null
        }
    }

    dequeue() {
        const first = this.queue[0]
        this.queue.splice(0, 1)
        this.length--
        return first

    }
    print() {
        console.log(this.queue);
    }
}


let q = new Queue()
console.log(q.isEmpty())    //true
q.print()                   //[]
q.enqueue(2)
console.log(q.isEmpty())    //false
q.enqueue(4)
q.print()                   //[4,2]
console.log(q.peek())       //2
q.dequeue()
q.dequeue()
console.log(q.peek())       //null
console.log(q.isEmpty())    //true




/* Do not remove the exports below */
module.exports = Queue