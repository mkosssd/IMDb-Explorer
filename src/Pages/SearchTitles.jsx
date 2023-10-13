import { useSearchParams } from "react-router-dom";
import Title from "./Title";
import { useEffect, useState } from "react";
const off_titles = [
	{
		id: "/title/tt6486762/",
		image: {
			height: 3000,
			id: "/title/tt6486762/images/rm3235405569",
			url: "https://m.media-amazon.com/images/M/MV5BZDk1MmI3YWEtMGE0MS00ZjFlLWIxMjgtMjc5MmRjOTZiMDc2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
			// ...
		},
		nextEpisode: "/title/tt13217676/",
		numberOfEpisodes: 3,
		principals: [
			{
				/* ... */
			},
			{
				/* ... */
			},
			{
				/* ... */
			},
		],
		runningTimeInMinutes: 269,
		seriesEndYear: 2023,
		seriesStartYear: 2023,
		title:
			"The Continental: From the World of John Wick",
		titleType: "tvMiniSeries",
		year: 2023,
	},
	{
		id: "/title/tt6486762/",
		image: {
			height: 3000,
			id: "/title/tt6486762/images/rm3235405569",
			url: "https://m.media-amazon.com/images/M/MV5BZDk1MmI3YWEtMGE0MS00ZjFlLWIxMjgtMjc5MmRjOTZiMDc2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
			// ...
		},
		nextEpisode: "/title/tt13217676/",
		numberOfEpisodes: 3,
		principals: [
			{
				/* ... */
			},
			{
				/* ... */
			},
			{
				/* ... */
			},
		],
		runningTimeInMinutes: 269,
		seriesEndYear: 2023,
		seriesStartYear: 2023,
		title:
			"The Continental: From the World of John Wick",
		titleType: "tvMiniSeries",
		year: 2023,
	},
	{
		id: "/title/tt6486762/",
		image: {
			height: 3000,
			id: "/title/tt6486762/images/rm3235405569",
			url: "https://m.media-amazon.com/images/M/MV5BZDk1MmI3YWEtMGE0MS00ZjFlLWIxMjgtMjc5MmRjOTZiMDc2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
			// ...
		},
		nextEpisode: "/title/tt13217676/",
		numberOfEpisodes: 3,
		principals: [
			{
				/* ... */
			},
			{
				/* ... */
			},
			{
				/* ... */
			},
		],
		runningTimeInMinutes: 269,
		seriesEndYear: 2023,
		seriesStartYear: 2023,
		title:
			"The Continental: From the World of John Wick",
		titleType: "tvMiniSeries",
		year: 2023,
	},
	{
		id: "/title/tt6486762/",
		image: {
			height: 3000,
			id: "/title/tt6486762/images/rm3235405569",
			url: "https://m.media-amazon.com/images/M/MV5BZDk1MmI3YWEtMGE0MS00ZjFlLWIxMjgtMjc5MmRjOTZiMDc2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
			// ...
		},
		nextEpisode: "/title/tt13217676/",
		numberOfEpisodes: 3,
		principals: [
			{
				/* ... */
			},
			{
				/* ... */
			},
			{
				/* ... */
			},
		],
		runningTimeInMinutes: 269,
		seriesEndYear: 2023,
		seriesStartYear: 2023,
		title:
			"The Continental: From the World of John Wick",
		titleType: "tvMiniSeries",
		year: 2023,
	},
	{
		id: "/title/tt6486762/",
		image: {
			height: 3000,
			id: "/title/tt6486762/images/rm3235405569",
			url: "https://m.media-amazon.com/images/M/MV5BZDk1MmI3YWEtMGE0MS00ZjFlLWIxMjgtMjc5MmRjOTZiMDc2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
			// ...
		},
		nextEpisode: "/title/tt13217676/",
		numberOfEpisodes: 3,
		principals: [
			{
				/* ... */
			},
			{
				/* ... */
			},
			{
				/* ... */
			},
		],
		runningTimeInMinutes: 269,
		seriesEndYear: 2023,
		seriesStartYear: 2023,
		title:
			"The Continental: From the World of John Wick",
		titleType: "tvMiniSeries",
		year: 2023,
	},
	{
		id: "/title/tt6486762/",
		image: {
			height: 3000,
			id: "/title/tt6486762/images/rm3235405569",
			url: "https://m.media-amazon.com/images/M/MV5BZDk1MmI3YWEtMGE0MS00ZjFlLWIxMjgtMjc5MmRjOTZiMDc2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
			// ...
		},
		nextEpisode: "/title/tt13217676/",
		numberOfEpisodes: 3,
		principals: [
			{
				/* ... */
			},
			{
				/* ... */
			},
			{
				/* ... */
			},
		],
		runningTimeInMinutes: 269,
		seriesEndYear: 2023,
		seriesStartYear: 2023,
		title:
			"The Continental: From the World of John Wick",
		titleType: "tvMiniSeries",
		year: 2023,
	},
];
const SearchTitles = () => {
	const [titleList, setTitles] = useState([]);
	const [searchParams] = useSearchParams();
	let title = searchParams.get("title");
	useEffect(() => {
		const loadedTitles = [];
		for (const key in off_titles) {
			loadedTitles.push(off_titles[key]);
		}
		setTitles(loadedTitles);
	}, []);
	// useEffect(() => {
	// 	const getTitleDetails = async () => {
	// 		const url = `https://imdb8.p.rapidapi.com/title/find?q=${title}`;
	// 		const options = {
	// 			method: "GET",
	// 			headers: {
	// 				"X-RapidAPI-Key":
	// 					"febfb4ee14mshe5d5db9d2d21fa6p15344fjsnac84ecdeaa78	",
	// 				"X-RapidAPI-Host":
	// 					"imdb8.p.rapidapi.com",
	// 			},
	// 		};

	// 		try {
	// 			const response = await fetch(
	// 				url,
	// 				options
	// 			);
	// 			const result = await response.json();
	// 			const loadedTitles = [];
	// 			let results = result.results;
	// 			console.log(results);
	// 			for (const key in results) {
	// 				// console.log(key);
	// 				loadedTitles.push(results[key]);
	// 			}
	// 			setTitles(loadedTitles);
	// 			// console.log();
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	};
	// 	getTitleDetails();
	// }, []);
	const tilte = titleList.map((res) => (
		<Title
			props={res}
			key={res.id}
		></Title>
	));
	return (
		<>
			{
				<div className="container text-center">
					<div className=" col-12 d-flex mx-auto flex-wrap justify-content-center">
						{tilte}
					</div>
				</div>
			}
		</>
	);
};
export default SearchTitles;
