const Title = (props) => {
	const prop = props.props;
	console.log(prop);
	if (
		prop.title === "" ||
		prop.title === undefined
	) {
		return;
	}
	return (
		<div className=" d-flex text-start py-2 my-1 row border-0 ">

			<div
				className=" col-2"
			>
				<img
					src={
						prop.image
							? prop.image.url
							: "https://as2.ftcdn.net/v2/jpg/04/00/24/31/1000_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg"
					}
					height="150px"
					// width="400px"/
					width="100px"
					className="rounded"
					style={{ objectFit: 'contain' }}
				/>

			</div>

			<div className="col p-3">
				<div className="row">

					<h5 className="h6 col-12 py-1 my-0 ">
						{prop.title}
					</h5>
					{prop.year && <p className="fw-semibold py-0 my-0 small">
						Year: {prop.year}
					</p>}
					<p className="py-0 my-0 fw-semibold small">

						Cast:	{prop.principals && prop.principals.map(res => <span className=" me-2 ">{res.name}. </span>)}
					</p>
					<p className="py-0 my-0 small fw-semibold">
						Title Type: <span className="text-capitalize">	{prop.titleType}</span>
					</p>
					{prop.runningTimeInMinutes && <p className="py-0 my-0 small fw-semibold">
						Running Time:	{prop.runningTimeInMinutes}M
					</p>}
				</div>
			</div>
		</div>
	);
};
export default Title;
