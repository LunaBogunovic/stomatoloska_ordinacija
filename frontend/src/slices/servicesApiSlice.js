import { SERVICE_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const servicesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getServices: builder.query({
            query: () => ({
                url: SERVICE_URL,
            }),

            keepUnusedDataFor: 5,
        }),

        getServiceDetails: builder.query({
            query: (serviceId) => ({
                url: `${SERVICE_URL}/${serviceId}`,
            }),

            keepUnusedDataFor: 5,
        }),
    }),
});

export const {
    useGetServicesQuery,
    useGetServiceDetailsQuery,
} = servicesApiSlice;
