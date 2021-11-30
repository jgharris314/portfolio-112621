import React from "react";

import { StyledImageDisplay } from "./image-display.styles";

const ImageDisplay = ({ activeImage }) => {
	return (
		<StyledImageDisplay>
			<img src={activeImage} />
		</StyledImageDisplay>
	);
};

export default ImageDisplay;
