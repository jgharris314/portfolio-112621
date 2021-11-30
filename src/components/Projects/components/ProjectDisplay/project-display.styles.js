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
	font-size: 2rem;
	margin: 10px 0px;
	padding: 0.5%;

	h3 {
		font-size: 3rem;
		margin: 0px;
		color: orange;
	}
	.section {
		width: 90%;
		justify-content: center;
		margin: 10px auto;
		padding: 0.25%;
		border-radius: 5px;
		box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.1);
	}

	.title {
		font-size: 4.2rem;
		margin-top: 5px;
		color: orange;
		font-weight: bold;
	}

	.access-section {
		display: flex;
		flex-direction: row;
		width: 50%;
		align-items: center;
		justify-content: center;
	}

	.demo-btn {
		display: flex;
		background-color: rgba(255, 255, 255, 0.5);
		height: 50px;
		padding: 0.25%;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
		margin-left: 15px;

		:hover {
			background-color: limegreen;
		}
	}
	.github-img {
		border-radius: 10px;
		background-color: rgba(255, 255, 255, 0.5);

		:hover {
			background-color: orange;
		}
	}
`;
