import MediaCarousel from "./MediaCarousel";

function MediaHub() {
	return (
		<main className="relative lg:-mt-48 max-w-[1920px] mx-auto z-50 p-4 lg:p-0">
			<MediaCarousel
				title="Continue Watching"
				endpoint={"/trending/all/day?language=en-US"}
			/>
			<MediaCarousel
				title="TV Series Airing Today"
				endpoint={"/tv/airing_today"}
			/>
			<MediaCarousel title="Upcoming Movies" endpoint={"/movie/upcoming"} />
			<MediaCarousel title="Top Rated Series" endpoint={"/tv/top_rated"} />
			<MediaCarousel title="Popular TV Series" endpoint={"/tv/popular"} />
		</main>
	);
}

export default MediaHub;
