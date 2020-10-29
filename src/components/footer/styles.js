import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	padding: 50px 80px;
	margin: auto;
	max-width: 1000px;
	flex-direction: column;

	@media (max-width: 1000px) {
		padding: 70px 30px;
	}
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
	grid-gap: 10px;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	}
`;

export const Link = styled.a`
	color: #757575;
	margin-bottom: 20px;
	font-size: 13px;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

export const Title = styled.p`
	color: #757575;
	font-size: 16px;
	margin-bottom: 5px;
`;

export const Text = styled.p`
	color: #757575;
	font-size: 13px;
	margin-bottom: 40px;
	margin-top: 0;
`;

export const Break = styled.p`
	flex-basis: 100%;
	height: 0;
`;
