import Projects from "./projects";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function Head(){
	return (

		<>
		<div className='container-fluid'>
		<nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Hex</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/projects' className="nav-link active" aria-current="page">Projects</Link>
        </li>
        <li className="nav-item">
          <Link to='/about' className="nav-link active" aria-current="page">About Me</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
		</>
		)
}

export default Head;