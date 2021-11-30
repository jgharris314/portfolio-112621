import styled from "styled-components";

export const StyledAbout = styled.div`
	display: flex;
	flex-direction: column;

	align-items: center;
	padding-top: 50px;
	.section {
		background-color: rgba(255, 255, 255, 0.05);
		width: 90%;
		justify-content: center;
		align-items: center;
		padding: 0px 0px 15px 0px;
		border-radius: 5px;
		box-shadow: 0px 0px 5px white;
		font-size: 2.4rem;
		margin: 10px 0px;

		h4 {
			font-size: 4.2rem;
			margin: 0px;
		}
		&-item {
			list-style: none;
		}
	}
`;
