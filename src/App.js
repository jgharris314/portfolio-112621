import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import React from "react";
import "./styles.css";
function App() {
	return (
		<div className="App">
			<Header />
			<Nav />
			<div className="body-section">
				<div id="home">
					<Home />
				</div>
				<div id="about">
					<About />
				</div>
				<div id="projects">
					<Projects />
				</div>
				<div id="contact">
					<Contact />
				</div>
			</div>
		</div>
	);
}

export default App;
