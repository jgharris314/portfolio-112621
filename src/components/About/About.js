import React from "react";
import { StyledAbout } from "./about.styles";
import "../styles.css";
const About = () => {
	return (
		<StyledAbout className="body-section">
			<div className="section">
				Greetings! <br />
				I'm Jacob Harris, a web developer located in Denver, Colorado.
			</div>
			<ul className="section">
				<h4>Skills</h4>
				<li className="section-item">React</li>
				<li className="section-item">Express</li>
				<li className="section-item">Node</li>
				<li className="section-item">PostgreSQL</li>
			</ul>
			<ul className="section">
				<h4>Hobbies</h4>
				<li className="section-item">Kendama</li>
				<li className="section-item">Learning</li>
				<li className="section-item">Hiking</li>
			</ul>
		</StyledAbout>
	);
};

export default About;
