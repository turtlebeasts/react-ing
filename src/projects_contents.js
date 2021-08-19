function Content(props){
	return (

		<div className='row'>
			<div className="col-sm-12 col-lg-4">
				<img src={props.url} className='img-thumbnail'/>
			</div>
			<div className="col-sm-12 col-lg-8">
			<h2>{props.heading}</h2>
			<p>{props.text}</p>
			</div>
		</div>
		)
}

export default Content;