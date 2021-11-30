import styled from "styled-components";

export const StyledAbout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	.section {
		background-color: rgba(255, 255, 255, 0.05);
		width: 90%;
		justify-content: center;
		align-items: center;
		padding: 0px 0px 15px 0px;
		border-radius: 5px;
		box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.25);
		font-size: 2.4rem;
		margin: 10px 0px;
		padding: 0.5%;

		h4 {
			font-size: 4.2rem;
			margin: 0px;
			color: orange;
		}
		&-item {
			list-style: none;
		}
	}
`;
