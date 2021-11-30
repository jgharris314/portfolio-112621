import styled from "styled-components";

export const StyledVideoPlayer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	aspect-ratio: 16/9;
	width: 100%;
	box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.18);

	h3 {
		margin: 10px auto 10px auto;
		font-size: 2.4rem;
		padding: 0;
		background-color: rgba(255, 255, 255, 0.18);
		padding: 5px;
		width: 95%;
		border-radius: 5px;
		box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.18);
	}
`;
