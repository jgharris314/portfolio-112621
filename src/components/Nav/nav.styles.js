import styled from "styled-components";
import navImg from "./img/pexels-david-buchi-1070345.jpg";
export const StyledNav = styled.div`
	color: white;
	position: fixed;
	bottom: 50px;
	right: 50px;
	z-index: 9;
	.openedNav {
		display: flex;
		flex-direction: column;

		background-image: linear-gradient(
				rgba(29, 5, 37, 0.97),
				rgba(29, 5, 37, 0.97)
			),
			url(${navImg});
		background-size: cover;
		height: 250px;
		text-align: center;

		border: 0.5px solid rgba(255, 255, 255, 0.33);
		border-radius: 5px;
		box-shadow: 0px 0px 10px white;

		.close-btn {
			text-align: right;
			padding-right: 10px;
			margin-top: 10px;
			font-size: 2.5rem;
			font-weight: bold;
			margin-bottom: 5px;
			color: orange;
		}
	}

	.nav-option {
		font-size: 2rem;
		border: 0.5px solid limegreen;
		margin: 5px 10px;
		padding: 5px;
		display: flex;
		justify-content: center;
		text-decoration: none;
		color: white;
	}
	.closedNav {
		background-color: limegreen;
		box-shadow: 0px 0px 10px white;
		border-radius: 5px;
	}

	.active {
		border: 0.5px solid orange;
	}
`;
