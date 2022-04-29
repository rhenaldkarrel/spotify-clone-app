import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "store/store";
import Home from "./index";

describe("Create playlist page", () => {
	const view = () =>
		render(
			<Provider store={store}>
				<Home />
			</Provider>
		);

	it("should render home component", () => {
		view();
		const sectionTitle = screen.getByText(/Find and Create playlist/i);
		expect(sectionTitle).toBeInTheDocument();
	});

	// still error
	it("should render one card when data was fetched", async () => {
		view();
		const trackCards = await screen.findAllByTestId("trackCard");
		expect(trackCards.length).toEqual(1);
	});
});
