import React from "react";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footerContainer";
import { HeaderContainer } from "../containers/headerContainer";
import { JumbotronContainer } from "../containers/jumbotronContainer";
import { OptForm, Feature } from "../components";

export default function Home() {
	return (
		<>
			<HeaderContainer>
				<Feature>
					<Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
					<Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
					<OptForm>
						<OptForm.Text>
							Ready to watch? Enter your email to create or restart your
							membership.
						</OptForm.Text>
						<OptForm.Break />
						<OptForm.Input placeholder="Email Address" />
						<OptForm.Button>Get Started</OptForm.Button>
					</OptForm>
				</Feature>
			</HeaderContainer>
			<JumbotronContainer />
			<FaqsContainer />
			<FooterContainer />
		</>
	);
}
