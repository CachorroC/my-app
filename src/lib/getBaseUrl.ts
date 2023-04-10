import { cache } from "react";

export const getBaseUrl = cache(() =>
    process.env ? "https://app.rsasesorjuridico.com" : "http://localhost:3000"
);
