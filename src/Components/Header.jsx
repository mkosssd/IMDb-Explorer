import logo from "../logo.svg";
import { NavLink } from "react-router-dom";
const Header = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-transparent py-3">
				<div className="container">
					<a
						href="/"
						className="navbar-brand fw-semibold"
					>
						<img
							src={logo}
							className="me-3"
							alt="logo"
						></img>
						IMDb Explorer
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-semibold">
						
							<li className="nav-item mx-2">
								<NavLink
									to="/"
									className="nav-link active"
								>
									Search Titles
								</NavLink>
							</li>
							{/* <li className="nav-item mx-2">
								<NavLink
									to="/popular-tv-shows"
									className="nav-link active"
								>
									Popular TV Shows
								</NavLink>
							</li>
							<li className="nav-item mx-2">
								<NavLink
									to="/popular-movies"
									className="nav-link active"
								>
									Popular Movies
								</NavLink>
							</li> */}
							<li className="nav-item mx-2">
								<NavLink
									to="/about"
									className="nav-link"
								>
									About
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
export default Header;
