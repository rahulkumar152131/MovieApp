import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Mjk2MGYwZThjYWUwYWJlNjRiMGYzNjI2NTcxNzU3NSIsInN1YiI6IjY0ZTMxM2FjZGE5ZWYyNDhmMzY0ZmQyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cmdk9QbSnYNZRbnqWktNqzrNPNQjAtCtp911gvLf4IA",
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};