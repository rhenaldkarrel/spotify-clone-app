import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormCreatePlaylist from ".";

describe("Form Create Playlist", () => {
	const onClose = jest.fn();
	const onSubmit = jest.fn();
	const show = true;

	afterEach(cleanup);

	it("should render the component", () => {
		render(
			<FormCreatePlaylist onClose={onClose} onSubmit={onSubmit} show={show} />
		);

		expect(screen.getByLabelText("Title")).toBeInTheDocument();
		expect(screen.getByLabelText("Description")).toBeInTheDocument();
		expect(screen.getByText("Create")).toBeInTheDocument();
	});

	it("should close the alert", () => {
		render(
			<FormCreatePlaylist onClose={onClose} onSubmit={onSubmit} show={show} />
		);

		userEvent.click(screen.getByRole("button", { name: /X/i }));
		expect(onClose).toHaveBeenCalled();
	});

	it("should submit the form", () => {
		render(
			<FormCreatePlaylist onClose={onClose} onSubmit={onSubmit} show={show} />
		);

		userEvent.click(screen.getByRole("button", { name: /Create/i }));
		expect(onSubmit).toHaveBeenCalled();
	});
});
