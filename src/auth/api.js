export const getTracks = async (keyword, token) => {
	const response = await fetch(
		`https://api.spotify.com/v1/search?q=${keyword}&type=track&limit=15`,
		{
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);
	const res = await response.json();
	const data = await res.tracks.items;
	return data;
};

export const getToken = () => {
	const hash = window.location.hash;
	let token = window.localStorage.getItem("token");

	if (!token && hash) {
		token = hash
			.substring(1)
			.split("&")
			.find((elem) => elem.startsWith("access_token"))
			.split("=")[1];

		window.location.hash = "";
		window.localStorage.setItem("token", token);
	}
	return token;
};
