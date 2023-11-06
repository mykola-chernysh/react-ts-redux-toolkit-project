import axios from "axios";

import {baseURL} from "../constants";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use(request => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDY1MGViZTU5YmY2MjNlOWZlYTZmYTI0MjJhOTBiMCIsInN1YiI6IjY1NDYxZWU1NDFhNTYxMzM2YTIyNDNjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zh41_vhrmBtgEXc_GM2TdpUt6qCMNrE29ltep17s_xM';

    request.headers.Authorization = `Bearer ${token}`;

    return request;
})


export {axiosService};