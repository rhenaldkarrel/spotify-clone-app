import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import { useTypedSelector } from "hooks/typedReduxHooks";
import store from "./store/store";
import App from "./App";

test("check the login page", () => {
	render(
		<Provider store={store}>
			<App />
		</Provider>
	);
	const linkElement = screen.getByText(/welcome/i);
	expect(linkElement).toBeInTheDocument();
});

test("check the create playlist page", () => {
	render(
		<Provider store={store}>
			<App />
		</Provider>
	);

	fireEvent.click(screen.getByText(/create playlist/i));

	const linkElement = screen.getByText(/welcome/i);
	expect(linkElement).toBeInTheDocument();
});
