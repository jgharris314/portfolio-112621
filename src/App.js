import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
function App() {
	return (
		<div className="App">
			<Header />
			<Nav />
			<Routes>
				<Route exact path="/" element={<Navigate to="/home" />} />

				<Route path="/home" exact element={<Home />} />

				<Route path="about" exact element={<About />} />
				<Route path="projects" exact element={<Projects />} />
				<Route path="contact" exact element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
