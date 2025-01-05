import { useEffect, useState } from "react";
import { BASE_URL, options } from "../api.js";
import HeroCover from "./HeroCover";

function Hero() {
	const [data, setData] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(
					`${BASE_URL}/trending/all/week?language=en-US`,
					options
				);
				if (!response.ok) {
					throw new Error("Network response was not ok " + response.statusText);
				}
				const data = await response.json();
				setData(data.results);
				console.log(data);
			} catch (error) {
				console.error("Error fetching data: ", error);
			}
		}

		fetchData();
	}, []);

	const randomIndex =
		data && data.length > 0 ? Math.floor(Math.random() * data.length) : null;

	return (
		<header className="max-h-svh max-w-[1920px] mx-auto relative">
			<nav className="flex justify-between items-center p-4 backdrop-blur-sm fixed w-full bg-black/50 font-medium z-50 lg:px-16">
				<h3>
					<a href="#">Home</a>
				</h3>
				<ul className="flex justify-center gap-4 md:absolute left-0 md:w-full">
					<li>
						<a href="#">Movies</a>
					</li>
					<li>
						<a href="#">Series</a>
					</li>
				</ul>
				<div className="hidden md:flex gap-4">
					<div>Search Bar</div>
					<div>Genres Menu</div>
				</div>
			</nav>
			{data && <HeroCover data={data[randomIndex]} />}
		</header>
	);
}

export default Hero;
