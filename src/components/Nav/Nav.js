import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { StyledNav } from "./nav.styles";

import menuIcon from "./img/icons8-menu-squared-64.png";
const Nav = () => {
	const [isOpened, setIsOpened] = useState(false);
	const navList = ["Home", "About", "Projects", "Contact"];
	const activePage = useLocation();
	return (
		<StyledNav>
			{isOpened && (
				<div className="openedNav">
					<p
						className="close-btn"
						onClick={() => setIsOpened(!isOpened)}
					>
						X
					</p>
					{navList.map((e, index) => {
						return (
							//TODO update hash onScroll.
							<a
								href={`#${e.toLowerCase()}`}
								className={
									activePage.hash === `#${e.toLowerCase()}`
										? "nav-option active"
										: "nav-option"
								}
								key={index}
								onClick={() => setIsOpened(!isOpened)}
							>
								{e}
								{console.log(activePage.hash)}
							</a>
						);
					})}
				</div>
			)}
			{!isOpened && (
				<div
					className="closedNav"
					onClick={() => setIsOpened(!isOpened)}
				>
					<img src={menuIcon} alt="Menu icon" />
				</div>
			)}
		</StyledNav>
	);
};

export default Nav;
