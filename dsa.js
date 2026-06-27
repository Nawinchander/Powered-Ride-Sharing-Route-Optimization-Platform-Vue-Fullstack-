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



// Interview Question
// Why Priority Queue over sorting every request?

// Sorting every request costs:

// O(n log n)

// Priority Queue operations cost:

// Insert -> O(log n)

// Remove -> O(log n)

// This becomes extremely important when there are tens of thousands of active drivers.


// Trie

class TrieNode {
    constructor() {
        this.children = {};
        this.end = false;
    }
}

