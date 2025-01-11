import { BASE_IMG_URL, IMG_SIZES } from "../api";

function HeroCover({ data }) {
	console.log(data);

	return (
		<div className="relative lg:h-svh z-30">
			<picture className="brightness-90">
				<source
					media="(min-width:1024px)"
					srcSet={`${BASE_IMG_URL}/${IMG_SIZES.backdrop_sizes.original}${data.backdrop_path}`}
					className="w-full md:h-svh object-cover object-center"
					draggable="false"
				/>
				<img
					src={`${BASE_IMG_URL}/${IMG_SIZES.poster_sizes.original}${data.poster_path}`}
					alt=""
					draggable="false"
					className="w-full md:h-svh object-cover object-center"
				/>
			</picture>
			<div className="absolute inset-0 flex items-end lg:items-center p-4 lg:p-16 select-none">
				<div className="flex flex-col w-full text-center lg:text-start gap-2 lg:gap-8">
					<h2 className="font-bold text-[2.75rem] leading-[1.15] md:text-5xl lg:text-6xl drop-shadow-[2px_2px_1.25px_rgba(0,0,0,.75)]">
						{data.title || data.name}
					</h2>
					<p className="hidden text-xl text-balance font-medium lg:line-clamp-4 drop-shadow-[2px_2px_2px_rgba(0,0,0,.75)] lg:max-w-[60%] xl:max-w-[40%]">
						{data.overview}
					</p>
					<div className="flex justify-center gap-2 lg:justify-start font-semibold">
						<button className="px-4 py-1 lg:px-5 lg:py-2 text-black text-lg lg:text-xl bg-white rounded hover:bg-neutral-200 transition-colors">
							Play Trailer
						</button>
						<button className="px-4 py-1 lg:px-5 lg:py-2 text-white text-lg lg:text-xl bg-neutral-500/60 rounded hover:bg-neutral-500/40 transition-colors">
							More Information
						</button>
					</div>
				</div>
			</div>
			<div className="hidden lg:block absolute left-0 bottom-0 w-full h-[12rem] shadow-[inset_0px_-280px_80px_-180px_rgba(20,20,20,1);]"></div>
		</div>
	);
}

export default HeroCover;
