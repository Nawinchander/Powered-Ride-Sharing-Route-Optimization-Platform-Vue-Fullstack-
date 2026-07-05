class SlidingWindow {
    constructor(size) {
        this.size = size;
        this.requests = [];
    }

    addRequest(timestamp) {
        this.requests.push(timestamp);

        while (
            this.requests.length &&
            timestamp - this.requests[0] >
            this.size
        ) {
            this.requests.shift();
        }
    }

    getCount() {
        return this.requests.length;
    }
}

module.exports = SlidingWindow;


