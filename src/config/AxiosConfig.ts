import http from "axios";

const axiosConfig = http.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_API}`,
    headers: {
        Authorization: `Token token=${process.env.NEXT_PUBLIC_TOKEN}`,
        "Content-Type": "application/json",
    }
});

export default axiosConfig;