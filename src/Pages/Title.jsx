const Title = (props) => {
	console.log(props.props.image);
	console.log("dsdsdsadhbj");
	const prop = props.props;
	if (
		prop.title == "" ||
		prop.title == undefined
	) {
		return;
	}
	return (
		<div className="card border border-primary mx-1 col-3  my-2">
			<div
				className="bg-image hover-overlay ripple"
				data-mdb-ripple-color="light"
			>
				<img
					src={
						prop.image
							? prop.image.url
							: "https://as2.ftcdn.net/v2/jpg/04/00/24/31/1000_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg"
					}
					className="img-fluid"
					width="100%"
				/>
				<a href="#!">
					<div className="mask"></div>
				</a>
			</div>

			<div className="card-body">
				<h5 className="card-title">
					{prop.title}
				</h5>
				<p className="card-text"></p>

				{/* <button type="button" className="btn btn-primary">Button</button> */}
			</div>
		</div>
	);
};
export default Title;
