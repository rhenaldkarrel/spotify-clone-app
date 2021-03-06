// Convert spotify's track duration to minutes and seconds
export const convertDuration = (duration: number): string => {
	const minutes = Number((duration / 60000).toFixed(0));
	let seconds = Number(((duration % 60000) / 1000).toFixed(0));
	return `${minutes}:${seconds}`;
};

// Get the token from authorization
export const getToken = (): string => {
	const hash = window.location.hash;
	let token;

	if (hash) {
		token = hash
			.substring(1)
			.split("&")
			.find((elem) => elem.startsWith("access_token"))
			.split("=")[1];
		window.location.hash = "";
	}
	return token;
};
