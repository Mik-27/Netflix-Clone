import styled from "styled-components/macro";

export const Container = styled.div`
	display: flex;
	border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
	display: flex;
	padding: 70px 45px;
	flex-direction: column;
	max-width: 815px;
	margin: auto;
`;

export const Item = styled.div`
	color: white;
	margin-bottom: 10px;
	width: 815px;

	&:first-of-type {
		margin-top: 3rem;
	}
`;

export const Title = styled.div`
	font-size: 49px;
	font-weight: bold;
	line-height: 1.1;
	margin-top: 0;
	margin-bottom: 4rem;
	color: white;
	text-align: center;

	@media (max-width: 600px) {
		font-size: 35px;
	}
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	cursor: pointer;
	margin-bottom: 1px;
	font-size: 26px;
	font-weight: normal;
	background-color: #303030;
	padding: 0.8em 1.2em;
	user-select: none;
	align-items: center;

	img {
		filter: brightness(0) invert(1);
		width: 24px;

		@media (max-width: 600px) {
			width: 16px;
		}
	}

	@media (max-width: 600px) {
		font-size: 16px;
	}
`;

// export const Frame = styled.div`
// 	margin-bottom: 40px;
// `;

export const Body = styled.div`
	max-height: 1200px;
	transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
	font-size: 26px;
	font-weight: normal;
	line-height: normal;
	background-color: #303030;
	padding: 0.8em 1.2em;
	white-space: pre-wrap;
	user-select: none;
	align-items: center;

	@media (max-width: 600px) {
		font-size: 16px;
		line-height: 22px;
	}
`;
