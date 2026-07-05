exports.calculateSurgePrice = (
    baseFare,
    activeRequests,
    activeDrivers
) => {

    if (activeDrivers === 0) {
        return baseFare * 3;
    }

    const ratio =
        activeRequests / activeDrivers;

    let multiplier = 1;

    if (ratio > 2) {
        multiplier = 2.5;
    } else if (ratio > 1.5) {
        multiplier = 2;
    } else if (ratio > 1) {
        multiplier = 1.5;
    }

    return {
        multiplier,
        finalFare:
            baseFare * multiplier
    };
};



