import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import React, { useState } from "react";
function App() {
	const [headerMemo, setHeaderMemo] = useState("Web Developer");
	return (
		<div className="App">
			<Header headerMemo={headerMemo} />
			<Nav />
			<Routes>
				<Route exact path="/" element={<Navigate to="/home" />} />

				<Route
					path="/home"
					exact
					element={<Home setHeaderMemo={setHeaderMemo} />}
				/>

				<Route
					path="about"
					exact
					element={<About setHeaderMemo={setHeaderMemo} />}
				/>
				<Route
					path="projects"
					exact
					element={<Projects setHeaderMemo={setHeaderMemo} />}
				/>
				<Route
					path="contact"
					exact
					element={<Contact setHeaderMemo={setHeaderMemo} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
