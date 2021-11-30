import React from "react";
import ImageDisplay from "../../../Projects/components/ProjectDisplay/components/ImageDisplay/ImageDisplay";
import { StyledIconDisplay } from "./icon-display.styles";
import github from "./img/github.png";
import linkedIn from "./img/linkedin.png";
const IconDisplay = () => {
	return (
		<StyledIconDisplay>
			<img
				className="img-btn github"
				src={github}
				alt="GitHub logo"
				onClick={() => window.open("https://github.com/jgharris314")}
			/>
			<img
				className="img-btn linkedin"
				src={linkedIn}
				alt="LinkedIn logo"
				onClick={() =>
					window.open(
						"https://www.linkedin.com/in/jacob-harris-web-dev/"
					)
				}
			/>
		</StyledIconDisplay>
	);
};

export default IconDisplay;
