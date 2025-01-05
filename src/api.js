const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${API_TOKEN}`,
	},
};

export const BASE_URL = "https://api.themoviedb.org/3";

export const BASE_IMG_URL = "https://image.tmdb.org/t/p";
