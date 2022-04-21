import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchTracks from "./SearchTracks";

describe("Search tracks form", () => {
	beforeEach(() => {
		const setSearch = jest.fn();
		// eslint-disable-next-line testing-library/no-render-in-setup
		render(<SearchTracks setSearch={setSearch} />);
	});

	afterEach(cleanup);

	it("all components are rendered properly", () => {
		const inputSearch = screen.getByPlaceholderText(/Find your track.../i);
		const btnSearch = screen.getByRole("button", {
			name: /Search/i,
		});

		expect(inputSearch).toBeInTheDocument();
		expect(btnSearch).toBeInTheDocument();
	});

	it("input search can be typed", () => {
		const inputSearch = screen.getByPlaceholderText(/Find your track.../i);

		userEvent.type(inputSearch, "How you like that");
		expect(inputSearch).toHaveValue("How you like that");
	});
});
