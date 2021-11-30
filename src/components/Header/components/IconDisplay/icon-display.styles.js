import styled from "styled-components";

export const StyledIconDisplay = styled.div`
	box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.18);
	display: flex;
	flex-direction: row;
	align-items: center;

	height: 64px;

	margin-top: 10px;

	justify-content: space-evenly;
	width: 20%;

	.img-btn {
		background-color: rgba(255, 255, 255, 0.5);
		border-radius: 10px;
	}

	.linkedin {
		:hover {
			background-color: #4875b4;
		}
	}

	.github {
		:hover {
			background-color: orange;
		}
	}
`;
