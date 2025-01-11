import { useEffect, useRef, useState } from "react";
import { BASE_URL, options } from "../api";
import arrowRight from "../assets/chevron.png";
import arrowLeft from "../assets/left-chevron.png";
import Card from "./Card";

function MediaCarousel({ title = "Carousel", endpoint }) {
	const [data, setData] = useState(null);
	const [carouselPosition, setCarouselPosition] = useState(0);
	const carouselRef = useRef(null);

	function moveCarouselRight() {
		if (carouselRef.current) {
			const carouselWidth = carouselRef.current.offsetWidth;
			const contentWidth = carouselRef.current.scrollWidth;
			setCarouselPosition((prevPosition) =>
				Math.min(prevPosition + carouselWidth, contentWidth - carouselWidth)
			);
		}
	}

	function moveCarouselLeft() {
		if (carouselRef.current) {
			const carouselWidth = carouselRef.current.offsetWidth;
			setCarouselPosition((prevPosition) =>
				Math.max(prevPosition - carouselWidth, 0)
			);
		}
	}

	useEffect(() => {
		if (carouselRef.current) {
			const handleResize = () => {
				// Sincroniza posición en caso de cambios en el tamaño de la ventana
				setCarouselPosition((prevPosition) =>
					Math.min(
						prevPosition,
						carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
					)
				);
			};

			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(`${BASE_URL}${endpoint}`, options);
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
	}, [endpoint]);

	return (
		<div className="overflow-hidden pb-6 lg:pb-14">
			<h2 className="font-semibold text-xl lg:text-2xl 2xl:text-3xl lg:px-14">
				{title}
			</h2>
			<div className="relative lg:px-14 lg:mt-2 group">
				<div
					className={`flex gap-2 lg:gap-0 pb-2 lg:pb-0 mt-2 overflow-x-scroll lg:overflow-visible transition-transform duration-300`}
					style={{ transform: `translateX(-${carouselPosition}px)` }}
					ref={carouselRef}
				>
					{data &&
						data.map((media, index) => (
							<Card key={`${media.id}-${index}`} data={media} />
						))}
				</div>

				{data && (
					<div className="hidden absolute h-full w-full top-0 left-0 lg:group-hover:flex justify-between py-1 z-50">
						<button
							className={`rounded-r-md ${
								carouselPosition === 0 ? "hidden" : ""
							}`}
							onClick={moveCarouselLeft}
						>
							<img src={arrowLeft} alt="" className="max-w-14 invert" />
						</button>

						<button
							className={`rounded-l-md ml-auto`}
							onClick={moveCarouselRight}
						>
							<img src={arrowRight} alt="" className="max-w-14 invert" />
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default MediaCarousel;
