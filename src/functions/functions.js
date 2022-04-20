export const convertDuration = (duration) => {
	const minutes = Number((duration / 60000).toFixed(0));
	let seconds = Number(((duration % 60000) / 1000).toFixed(0));
	return `${minutes}:${seconds}`;
};

// Get the token from authorization
export const getToken = () => {
	const hash = window.location.hash;
	let token = localStorage.getItem("token");

	if (!token && hash) {
		token = hash
			.substring(1)
			.split("&")
			.find((elem) => elem.startsWith("access_token"))
			.split("=")[1];
		window.location.hash = "";
		localStorage.setItem("token", token);
	}
	return token;
};
