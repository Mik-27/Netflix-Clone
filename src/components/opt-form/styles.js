import styled from "styled-components/macro";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	height: 100%;
	margin-top: 30px;
	flex-wrap: wrap;

	@media (max-width: 1000px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const Input = styled.input`
	display: block;
	max-width: 500px;
	width: 100%;
	border: 0;
	padding: 10px;
	height: 70px;
	box-sizing: border-box;
	z-index: 5;

	&:focus {
		outline: solid blue 1px;
	}
`;

export const Button = styled.button`
	display: block;
	align-items: center;
	// width: 100%;
	height: 70px;
	background-color: #e50914;
	color: white;
	text-transform: uppercase;
	padding: 0 32px;
	font-size: 28px;
	border: 0;
	cursor: pointer;
	z-index: 1;

	&:hover {
		background-color: #f40612;
	}

	@media (max-width: 1000px) {
		height: 50px;
		font-size: 17px;
		margin-top: 20px;
		font-weight: bold;
	}

	img {
		margin-left: 10px;
		filter: brightness(0) invert(1);
		width: 22px;

		@media (max-width: 1000px) {
			width: 16px;
		}
	}
`;

export const Text = styled.p`
	font-size: 19.2px;
	color: white;
	align: center;

	@media (max-width: 600px) {
		font-size: 16px;
		line-height: 22px;
	}
`;

export const Break = styled.div`
	flex-basis: 100%;
	height: 0;
`;
