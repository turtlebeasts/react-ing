import logo from './logo.svg';
import './App.css';
import React from 'react';
import Head from './head';
import Projects from './projects';
import Banner from './banner';
import Footer from "./footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
    <Head />
    <Route path="/" exact component={Banner} />
    <Route path="/projects" exact component={Projects} />
    </div>
    <Footer />
    </Router>
  );
}

export default App;
