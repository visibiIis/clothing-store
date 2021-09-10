import styled from "styled-components";

export const CollectionPageContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const CollectionTitle = styled.h2`
	font-size: 38px;
	margin: 0 auto 30px;
`;

export const CollectionItemsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	& > div {
		margin-bottom: 30px;
	}

	@media screen and (max-width: 800px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 15px;
		margin: 0 auto;
	}
`;
