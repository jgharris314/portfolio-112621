import styled from "styled-components";
import headerImg from "./img/pexels-david-buchi-1070345.jpg";
export const StyledHeader = styled.div`
	background-image: linear-gradient(
			rgba(29, 5, 37, 0.92),
			rgba(29, 5, 37, 0.92)
		),
		url(${headerImg});
	background-size: cover;
	color: white;
	height: 150px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	top: 0;
	position: fixed;
	width: 100%;
	z-index: 9;
	h1 {
		padding: 0;
		margin: 0;
		font-size: 5.6rem;
		color: limegreen;
	}

	h2 {
		margin: 0;
		font-size: 2.6rem;
		color: orange;
	}
`;
