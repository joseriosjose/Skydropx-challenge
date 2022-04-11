import http from "axios";

const token= 'Fk09kz3ivwbM4sImxQbgd8AGekxAncWWghk4Otv2fiYt';
const baseUrl= 'https://api-demo.skydropx.com';

const axiosConfig = http.create({
    baseURL: `${baseUrl}`,
    headers:{
        Authorization: `Token token=${token}`,
        "Content-Type":"application/json",  
    }
});

export default axiosConfig;