import { useRef } from "react";
import {
	createSearchParams,
	useNavigate,
} from "react-router-dom";
import './HomePage.css'
const HomePage = () => {
	const navigate = useNavigate();
	const SubmitHandler = (e) => {
		e.preventDefault();
		const enteredTitle =
			titleInputRef.current.value.trim();
		if (enteredTitle !== "") {
			navigate({
				pathname: "search",
				search: createSearchParams({
					title: enteredTitle,
				}).toString(),
			});
		}else{
            window.alert('Please enter a title!')
        }
	};
	const titleInputRef = useRef();
	return (
		<>
			<div className="container my-md-5">
				<div className="row text-white  rounded-2 my-md-5">
					<div className="col-md-6 bg-primary rounded-start-2 py-md-5">
						<div className="my-md-5 py-md-5">
							<h1 className="pageHeading fw-bold py-4 text-center p-md-5 my-md-5">
								{" "}
								Search Movies & TV Shows with{" "}
								<span className="display-1 d-block">
									IMDb Explorer{" "}
									<span className="fw-bold">
										.
									</span>
								</span>
							</h1>
						</div>
					</div>
					<div className="col-md-6 rounded-end-2 py-md-5 text-primary bg-light">
						<div className="my-md-5 py-4 py-md-5 text-center">
							<h2 className="fw-bold display-5">
								Search your title here!
							</h2>
							<form
								className="my-5 py-1"
								onSubmit={SubmitHandler}
							>
								<div className="col-8 mx-auto my-4">
									<input
										ref={titleInputRef}
										className="form-control"
										type="text"
										placeholder="Search here…"
									/>
									<button className="btn btn-primary my-3 rounded-pill">
										Search
									</button>
								</div>
							</form>
							<div className="col-10 mx-auto text-black mt-5 pt-4">
								<p className="fw-bold">
									{" "}
									Search movies and TV shows and
									get details from world's most
									popular and authoritative source
									for movie, TV and celebrity
									content. Find ratings and
									reviews for the newest movie and
									TV shows.{"  "}
								</p>
								<ul className="fw-semibold list-group">
									<li className="list-group-item">
										Official Site:{" "}
										<a
											href="https://www.imdb.com/"
											target="_blank"
											className="text-decoration-none"
											rel="noreferrer"
										>
											IMDb{" "}
											<i className="bi bi-box-arrow-up-right"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default HomePage;
