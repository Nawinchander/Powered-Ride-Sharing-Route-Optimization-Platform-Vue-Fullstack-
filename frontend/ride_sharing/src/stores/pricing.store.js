import { defineStore } from "pinia";

import pricingApi from "../api/pricing.api";

export const usePricingStore = defineStore( "pricing",
{
    state: () => ({
        fare: null,
        multiplier: 1
    }),

    actions: {

        async calculateFare(
            payload
        ) {

            const response =
            await pricingApi.post(
                "/calculate",
                payload
            );

            this.fare =
            response.data.finalFare;

            this.multiplier =
            response.data.multiplier;
        }
    }
});



