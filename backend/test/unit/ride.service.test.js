describe("Ride Service", () => {

    test("Ride should be created", () => {

        const ride = {

            pickup: "A",

            destination: "B"

        };

        expect(ride.pickup).toBe("A");

    });

});

