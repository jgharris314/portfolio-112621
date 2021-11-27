import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<Header />
			<Nav />
			<Routes>
				<Route path="/home" exact element={<></>} />

				<Route path="about" exact element={<></>} />
				<Route path="projects" exact element={<></>} />
				<Route path="contact" exact element={<></>} />
			</Routes>
		</div>
	);
}

export default App;
