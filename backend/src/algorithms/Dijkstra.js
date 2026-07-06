function dijkstra( graph, start, destination ) {
    const distances = {};
    const visited = {};

    for (const node in graph) {
        distances[node] = Infinity;
    }

    distances[start] = 0;

    while (true) {
        let closest = null;

        for (const node in distances) {
            if (
                !visited[node] &&
                (
                    closest === null ||
                    distances[node] <
                    distances[closest]
                )
            ) {
                closest = node;
            }
        }

        if (closest === null) {
            break;
        }

        visited[closest] = true;

        for (
            const neighbor
            in graph[closest]
        ) {

            const distance =
                distances[closest] +
                graph[closest][neighbor];

            if (
                distance <
                distances[neighbor]
            ) {
                distances[neighbor] =
                    distance;
            }
        }
    }

    return distances[destination];
}

module.exports = dijkstra;



