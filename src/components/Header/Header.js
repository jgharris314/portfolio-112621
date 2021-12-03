import React from "react";
import { StyledHeader } from "./header.styles";
import IconDisplay from "./components/IconDisplay/IconDisplay";
const Header = () => {
	return (
		<StyledHeader>
			<h1>Jacob Harris</h1>
			<h2>Web Developer</h2>
			<IconDisplay />
		</StyledHeader>
	);
};

export default Header;
