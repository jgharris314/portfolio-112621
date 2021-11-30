import React from "react";
import { StyledHeader } from "./header.styles";
const Header = ({ headerMemo }) => {
	return (
		<StyledHeader>
			<h1>Jacob Harris</h1>
			<h2>{headerMemo}</h2>
		</StyledHeader>
	);
};

export default Header;
