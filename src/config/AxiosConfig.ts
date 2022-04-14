import http from "axios";

const { NEXT_PUBLIC_BASE_API, NEXT_PUBLIC_TOKEN } = process.env

const axiosConfig = http.create({
    baseURL: `${NEXT_PUBLIC_BASE_API}`,
    headers: {
        Authorization: `Token token=${NEXT_PUBLIC_TOKEN}`,
        "Content-Type": "application/json",
    }
});

export default axiosConfig;