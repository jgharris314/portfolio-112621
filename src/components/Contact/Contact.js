import React from "react";
import { StyledContact } from "./contact.styles";
import "../styles.css";
const Contact = ({ setHeaderMemo }) => {
	setHeaderMemo("Contact");
	return <StyledContact className="body-section">Contact</StyledContact>;
};

export default Contact;
