const pricingService =
require(
    "../services/pricing.service"
);

exports.getFare =
async (req, res) => {

    const {
        baseFare,
        activeRequests,
        activeDrivers
    } = req.body;

    const result =
    pricingService.calculateSurgePrice(
        baseFare,
        activeRequests,
        activeDrivers
    );

    res.json(result);
};



