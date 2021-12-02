import styled from "styled-components";

export const StyledContact = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h3 {
		font-size: 2.4rem;
		/* color: orange; */
		box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.18);
		width: 90%;
		border-radius: 5px;
		padding: 0.25%;
	}

	.form {
		display: flex;
		flex-direction: column;
		font-size: 2rem;
		box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.18);
		width: 350px;
		align-items: center;
		border-radius: 5px;
		&-row {
			width: 80%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			input {
				width: 50%;
			}

			textarea {
				width: 50%;
			}
			&-btn {
				display: flex;
				flex-direction: row;
				justify-content: center;

				button {
					border: none;
					min-height: 50px;
					width: 50px;
					border-radius: 5px;
					box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.18);
					margin: 5px;
				}
			}
		}
	}
	.submit {
		background-color: limegreen;
	}

	.reset {
		background-color: orange;
	}
`;
