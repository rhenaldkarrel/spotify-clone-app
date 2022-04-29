import { screen, render } from "@testing-library/react";
import ErrorNotFound from "./ErrorNotFound";

describe("Error Not Found", () => {
	it("should render the component", () => {
		render(<ErrorNotFound />);

		expect(screen.getByText(/Oh boy! No tracks/i)).toBeInTheDocument();
		expect(
			screen.getByText(/Hmm, make sure you have typed the right keyword/i)
		).toBeInTheDocument();
	});
});
