import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import React, { useState } from "react";
import "./styles.css";
function App() {
	const [headerMemo, setHeaderMemo] = useState("Web Developer");
	return (
		<div className="App">
			<Header headerMemo={headerMemo} />
			<Nav />

			<div className="body-section">
				<div id="home">
					<Home setHeaderMemo={setHeaderMemo} />
				</div>
				<div id="about">
					<About setHeaderMemo={setHeaderMemo} />
				</div>
				<div id="projects">
					<Projects setHeaderMemo={setHeaderMemo} />
				</div>
				<div id="contact">
					<Contact setHeaderMemo={setHeaderMemo} />
				</div>
			</div>
		</div>
	);
}

export default App;
