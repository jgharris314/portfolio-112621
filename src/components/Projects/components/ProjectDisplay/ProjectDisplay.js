import React, { useState, useEffect } from "react";
import { StyledProjectDisplay } from "./project-display.styles";
import ImageDisplay from "./components/ImageDisplay/ImageDisplay";
import github from "../../img/icons8-github-80.png";
const ProjectDisplay = ({ activeObject, currentImage, setCurrentImage }) => {
	const [activeImage, setActiveImage] = useState(
		activeObject.images[currentImage]
	);
	const [rerender, setRerender] = useState(false);

	useEffect(() => {
		setActiveImage(activeObject.images[currentImage]);
	}, [rerender, activeImage, activeObject]);

	const handleNextImage = () => {
		if (currentImage === activeObject.images.length - 1) {
			setCurrentImage(0);
			// setActiveImage(activeObject.images[currentImage]);
		} else {
			setCurrentImage(currentImage + 1);
		}
		setRerender(!rerender);
	};
	return (
		<StyledProjectDisplay>
			<div className="section title">{activeObject.title}</div>

			<ImageDisplay activeImage={activeImage} />

			<button onClick={() => handleNextImage()}>Next Image </button>

			<div className="section">{activeObject.description}</div>
			<div className="section">
				{activeObject.stack.map((item, index) => {
					return <div key={index}> {item}</div>;
				})}
			</div>
			<div className="access-section">
				<div>
					<img
						src={github}
						onClick={() => window.open(activeObject.github)}
						className="github-img"
						alt="github-logo"
					/>
				</div>
				<div
					onClick={() => window.open(activeObject.demo)}
					className="demo-btn"
				>
					Demo
				</div>
			</div>
		</StyledProjectDisplay>
	);
};

export default ProjectDisplay;
