import React, { useState, useEffect } from "react";
import { StyledProjects } from "./projects.styles";

import ProjectDisplay from "./components/ProjectDisplay/ProjectDisplay";
import projects from "./project-object.js";
const Projects = () => {
	const [activeObject, setActiveObject] = useState(projects[0]);
	const [rerender, setRerender] = useState(false);
	const [currentProject, setCurrentProject] = useState(0);
	const [currentImage, setCurrentImage] = useState(0);
	useEffect(() => {
		setCurrentImage(0);
		setActiveObject(projects[currentProject]);
	}, [rerender, currentProject]);
	const handleNextProject = () => {
		if (currentProject === projects.length - 1) {
			setCurrentProject(0);
		} else {
			setCurrentProject(currentProject + 1);
		}
		setRerender(!rerender);
	};
	return (
		<StyledProjects>
			<h2>Projects</h2>
			<ProjectDisplay
				currentImage={currentImage}
				setCurrentImage={setCurrentImage}
				activeObject={activeObject}
			/>
			<button onClick={() => handleNextProject()}>Next Project</button>
		</StyledProjects>
	);
};

export default Projects;
