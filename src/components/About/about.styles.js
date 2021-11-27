import styled from "styled-components";

export const StyledAbout = styled.div`
	display: flex;
	flex-direction: column;

	align-items: center;
	padding-top: 15px;
	.section {
		background-color: rgba(255, 255, 255, 0.18);
		width: 70%;
		justify-content: center;
		align-items: center;
		padding: 0;
		border-radius: 5px;
		box-shadow: 0px 0px 5px white;
		font-size: 2.4rem;
		h4 {
			font-size: 4.2rem;
			margin: 0px 0px 15px 0px;
		}
		&-item {
			list-style: none;
		}
	}
`;
