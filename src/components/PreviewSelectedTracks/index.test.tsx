import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PreviewSelectedTracks from ".";
import data from "mocks/data";

describe("Preview Selected Tracks", () => {
	const tracks = [data];
	const view = () => render(<PreviewSelectedTracks selectedTracks={tracks} />);

	afterEach(cleanup);

	it("check if album image rendered", () => {
		view();
		const imgElement = screen.getByAltText(data.album.name);
		expect(imgElement).toBeInTheDocument();
	});

	it("check if track title rendered", () => {
		view();
		const trackTitleElement = screen.getByText(data.name);
		expect(trackTitleElement).toBeInTheDocument();
	});

	it("check if artist name rendered", () => {
		view();
		const artistNameElement = screen.getByText(data.artists[0].name);
		expect(artistNameElement).toBeInTheDocument();
	});

	// still error
	it("should render one track only", () => {
		const { queryAllByTestId } = view();
		expect(queryAllByTestId(/prevTracks/i)).toHaveLength(1);
	});
});
