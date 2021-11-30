import React from "react";
import ReactPlayer from "react-player";
import { StyledVideoPlayer } from "./video-player.styles";
import portClip from "./vids/portfolio-kendama-clip.mp4";
const VideoPlayer = () => {
	return (
		<StyledVideoPlayer>
			<h3>Greetings Traveller!</h3>
			<ReactPlayer
				className="video"
				url={portClip}
				width="95%"
				height="90%"
				controls={true}
			/>
		</StyledVideoPlayer>
	);
};

export default VideoPlayer;
