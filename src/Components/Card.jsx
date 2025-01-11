import { BASE_IMG_URL, IMG_SIZES } from "../api";

function Card({ data }) {
	return (
		<div className="h-min lg:min-w-[16.666666%]">
			<picture>
				<source
					media="(min-width:1024px)"
					srcSet={`${BASE_IMG_URL}/${IMG_SIZES.backdrop_sizes[780]}${data.backdrop_path}`}
					draggable="false"
				/>
				<img
					src={`${BASE_IMG_URL}/${IMG_SIZES.poster_sizes[780]}${data.poster_path}`}
					alt={data.title || data.name}
					draggable="false"
					className="w-full h-full object-cover min-w-[8rem] rounded lg:p-1 lg:rounded-lg lg:aspect-video"
					loading="lazy"
				/>
			</picture>
			<div className="px-1 line-clamp-1">
				<h4>{data.title || data.name}</h4>
			</div>
		</div>
	);
}

export default Card;
