import { useSearchParams } from "react-router-dom";
import Title from "./Title";
import { useEffect, useState } from "react";
const SearchTitles = () => {
	const [titleList, setTitles] = useState([]);
	const [searchParams] = useSearchParams();
	let title = searchParams.get("title");
	useEffect(() => {
		const getTitleDetails = async () => {
			const url = `https://imdb8.p.rapidapi.com/title/find?q=${title}`;
			const options = {
				method: "GET",
				headers: {
					"X-RapidAPI-Key":
						"febfb4ee14mshe5d5db9d2d21fa6p15344fjsnac84ecdeaa78	",
					"X-RapidAPI-Host":
						"imdb8.p.rapidapi.com",
				},
			};

			try {
				const response = await fetch(
					url,
					options
				);
				const result = await response.json();
				const loadedTitles = [];
				let results = result.results;
				for (const key in results) {
					console.log(key);
					loadedTitles.push(results[key]);
				}
				setTitles(loadedTitles);
				console.log();
			} catch (error) {
				// console.error(error);
			}
		};
		getTitleDetails();
	}, []);
	const tilte = titleList.map((res) => (
		<Title 
			props={res}
			key={res.id}
		></Title>
	));
	return (
		<>
			{
				<div className="container px-2">
					<div className="d-flex ">

				{tilte}
					</div>
				</div>
				}
		</>
	);
};
export default SearchTitles;
