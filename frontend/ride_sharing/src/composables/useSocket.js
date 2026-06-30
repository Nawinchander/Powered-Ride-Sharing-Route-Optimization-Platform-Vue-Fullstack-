import { io }
from "socket.io-client";

export default () => {
    return io(
        "http://localhost:5000"
    );
};