import styled from "styled-components";

export const StyledProjects = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 2.6rem;

	button {
		height: 50px;
		border: none;
		background-color: limegreen;
		border-radius: 5px;
		box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);

		:hover {
			background-color: orange;
		}
	}
`;
