import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AlertSuccess from ".";

describe("Alert Success", () => {
	const header = "Success Message";
	const message = "This is a success message";
	const show = true;
	const onClose = jest.fn();

	afterEach(cleanup);

	it("should render the component", () => {
		render(
			<AlertSuccess
				header={header}
				message={message}
				show={show}
				onClose={onClose}
			/>
		);

		expect(screen.getByText(header)).toBeInTheDocument();
		expect(screen.getByText(message)).toBeInTheDocument();
	});

	it("should close the alert", () => {
		render(
			<AlertSuccess
				header={header}
				message={message}
				show={show}
				onClose={onClose}
			/>
		);

		userEvent.click(screen.getByText("Close"));
		expect(onClose).toHaveBeenCalled();
	});
});
