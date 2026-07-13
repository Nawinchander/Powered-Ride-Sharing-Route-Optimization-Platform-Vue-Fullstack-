const PriorityQueue = require ("../src/algorithms/PriorityQueue");

describe("Priority Queue", () => { test("Insert Driver", () => {

const queue = new PriorityQueue();

queue.insert({ score:2 });

expect( queue.heap.length ).toBe(1); 

});

});


