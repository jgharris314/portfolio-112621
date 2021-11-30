import React from "react";
import { StyledHome } from "./home.styles";
import "../styles.css";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
const Home = ({ setHeaderMemo }) => {
	setHeaderMemo("Web Developer");
	return (
		<StyledHome className="body-section">
			<VideoPlayer />
		</StyledHome>
	);
};

export default Home;
