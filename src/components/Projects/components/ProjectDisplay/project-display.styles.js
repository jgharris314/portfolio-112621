import styled from "styled-components";

export const StyledProjectDisplay = styled.div`
	display: flex;
	flex-direction: column;
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

	.section {
		width: 90%;
		justify-content: center;
		margin-bottom: 5px;
		padding: 0.25%;
		border-radius: 5px;
		box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.1);
	}

	.title {
		font-size: 3rem;
		margin-top: 5px;
	}

	.access-section {
		display: flex;
		flex-direction: row;
		width: 10%;
		align-items: center;
		justify-content: space-between;
	}

	.demo-btn {
		display: flex;
		background-color: rgba(255, 255, 255, 0.5);
		height: 50px;
		padding: 0.25%;
		justify-content: center;
		align-items: center;
		border-radius: 5px;

		:hover {
			background-color: limegreen;
		}
	}
	.github-img {
		border-radius: 15px;
		background-color: rgba(255, 255, 255, 0.5);
		:hover {
			background-color: orange;
		}
	}
`;
