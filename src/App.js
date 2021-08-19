import logo from './logo.svg';
import './App.css';
import React from 'react';
import Head from './head';
import Projects from './projects';
import Banner from './banner';
import Footer from "./footer";
import About from "./about";
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
    <Route path="/about" exact component={About} />
    </div>
    <Footer />
    </Router>
  );
}

export default App;
