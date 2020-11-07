import React from "react";
import useContent from "../hooks/use-content";
import selectionFilter from "../utils/selection-filter";

export default function Browse() {
	const { series } = useContent("series");
	const { films } = useContent("films");

	const slides = selectionFilter({ series, films });
	console.log(slides);

	return <h1>Browse Page</h1>;
}
