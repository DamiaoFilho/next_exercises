import xior from "xior";

export const client = xior.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
    },
})