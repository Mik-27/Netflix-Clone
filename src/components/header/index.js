import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	Background,
	Logo,
	Container,
	Group,
	Profile,
	Dropdown,
	Picture,
	ButtonLink,
	Feature,
	Text,
	FeatureCallout,
	TextLink,
	Search,
	SearchIcon,
	SearchInput,
	PlayButton,
} from "./styles";

export default function Header({ bg = true, children, ...restProps }) {
	return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
	return <Feature {...restProps}>{children}</Feature>;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
	return <Group {...restProps}>{children}</Group>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
	return <Profile {...restProps}>{children}</Profile>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
	return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
	return (
		<Link to={to}>
			<Logo {...restProps} />
		</Link>
	);
};

Header.ButtonLink = function HeadeerButtonLink({ children, ...restProps }) {
	return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
	return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.Search = function HeaderSearch({
	searchTerm,
	setSearchTerm,
	...restProps
}) {
	const [searchActive, setSearchActive] = useState(false);
	return (
		<Search {...restProps}>
			<SearchIcon
				onClick={() => {
					// console.log(searchActive);
					setSearchActive((searchActive) => !searchActive);
				}}
			>
				<img src="/images/icons/search.png" alt="Search" />
			</SearchIcon>
			<SearchInput
				value={searchTerm}
				onChange={({ target }) => setSearchTerm(target.value)}
				placeholder="Search films and series"
				active={searchActive}
			/>
		</Search>
	);
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
	return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
	return <TextLink {...restProps}>{children}</TextLink>;
};

Header.FeatureCallout = function HeaderFeatureCallout({
	children,
	...restProps
}) {
	return <FeatureCallout {...restProps}>{children}</FeatureCallout>;
};
