import React from "react";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footerContainer";
import { JumbotronContainer } from "../containers/jumbotronContainer";

export default function Home() {
	return (
		<>
			<JumbotronContainer />
			<FaqsContainer />
			<FooterContainer />
		</>
	);
}
