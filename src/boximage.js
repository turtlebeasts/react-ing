function BoxImage(props){
	
	return (
		<>
		<div className="col-md-4 col-sm-12">
		<img src={props.url} className="img-thumbnail"/>
		<h3>{props.heading}</h3>
		</div>
		</>
	)
}

export default BoxImage;