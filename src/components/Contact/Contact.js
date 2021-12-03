import React from "react";
import { StyledContact } from "./contact.styles";

const Contact = () => {
	return (
		<StyledContact>
			<h3>I am always open for new opportunities to build and learn!</h3>
			<form
				className="form"
				action="https://formspree.io/f/xjvlbpey"
				method="POST"
			>
				<div className="form-row">
					<label for="user-name">Name:</label>
					<input type="text" name="name" id="user-name" />
				</div>
				<div className="form-row">
					<label for="email">Email:</label>
					<input type="email" name="_replyto" id="email" />
				</div>
				<div className="form-row">
					<label for="message">Memo:</label>
					<textarea id="message" name="message"></textarea>
				</div>
				<div className="form-row-btn">
					<button type="submit" name="submit" className="submit">
						Submit
					</button>
					<button type="reset" name="reset" className="reset">
						Reset
					</button>
				</div>
			</form>
		</StyledContact>
	);
};

export default Contact;
