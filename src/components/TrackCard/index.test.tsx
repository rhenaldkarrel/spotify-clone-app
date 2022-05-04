import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TrackCard from ".";
import data from "mocks/data";

describe("Track card", () => {
	const view = () =>
		render(
			<TrackCard track={data} isSelected={false} onSelectTrack={() => {}} />
		);

	afterEach(cleanup);

	it("check if album image rendered", () => {
		view();
		const imgElement = screen.getByAltText(/Album/i);
		expect(imgElement).toBeInTheDocument();
	});

	it("check if album image source is right", () => {
		view();
		const imgElement = screen.getByAltText(/Album/i);
		expect(imgElement.getAttribute("src")).toBe(data.album.images[0].url);
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

	it("check if album name rendered", () => {
		view();
		const albumNameElement = screen.getByText(data.album.name);
		expect(albumNameElement).toBeInTheDocument();
	});
});
