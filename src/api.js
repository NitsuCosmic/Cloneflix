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

export const IMG_SIZES = {
	backdrop_sizes: {
		300: "w300",
		780: "w780",
		1280: "w1280",
		original: "original",
	},
	logo_sizes: {
		45: "w25",
		92: "w92",
		154: "w154",
		185: "w185",
		300: "w300",
		500: "w500",
		original: "original",
	},
	poster_sizes: {
		92: "w92",
		154: "w154",
		185: "w185",
		342: "w342",
		500: "w500",
		780: "w780",
		original: "original",
	},
	profile_sizes: {
		45: "w45",
		185: "w185",
		632: "h632",
		original: "original",
	},
	still_sizes: {
		92: "w92",
		185: "w185",
		300: "w300",
		original: "original",
	},
};
