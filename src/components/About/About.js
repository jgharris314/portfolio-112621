import React from "react";
import { StyledAbout } from "./about.styles";

const About = () => {
	return (
		<StyledAbout>
			<div className="section">
				I'm Jacob, a web developer located in Denver, Colorado. When I'm
				not making web applications, I enjoy getting outdoors,
				socializing with friends, and gaining new knowledge.
			</div>
			<div className="section">
				<h4>Skills</h4>
				<li className="section-item">React</li>
				<li className="section-item">Express</li>
				<li className="section-item">Node</li>
				<li className="section-item">PostgreSQL</li>
			</div>
			<div className="section">
				<h4>Hobbies</h4>
				<li className="section-item">Kendama</li>
				<li className="section-item">Playing music</li>
				<li className="section-item">Hiking</li>
			</div>
		</StyledAbout>
	);
};

export default About;
