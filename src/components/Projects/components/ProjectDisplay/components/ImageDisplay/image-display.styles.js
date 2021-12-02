import styled from "styled-components";

export const StyledImageDisplay = styled.div`
	display: flex;
	justify-content: center;

	img {
		/* aspect-ratio: 16/9; */
		/* height: 40vh;
		width: 90%; */
		object-fit: contain;
		object-position: center;
		box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.18);
		border-radius: 5px;
		max-height: 300px;
		max-width: 90%;
	}

	@media screen and (min-width: 720px) {
		img {
			max-height: 400px;
		}
	}
`;
