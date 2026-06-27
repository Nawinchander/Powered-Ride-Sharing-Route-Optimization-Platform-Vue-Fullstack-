// Priority Queue

class PriorityQueue {

    constructor() {
        this.heap = [];
    }

    insert(driver) {
        this.heap.push(driver);

        this.heap.sort(
            (a, b) =>
                a.score - b.score
        );
    }

    remove() {
        return this.heap.shift();
    }
}

