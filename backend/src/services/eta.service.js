const dijkstra = require( "../algorithms/Dijkstra" );

exports.calculateETA = (graph, source, destination ) => {
    const distance =
        dijkstra(
            graph,
            source,
            destination
        );

    const averageSpeed = 30;

    return Math.ceil(
        distance / averageSpeed * 60
    );
};