import { UserProfile } from "../types/spotify";

// Spotify Authorization
export const authSpotify = (): void => {
	const config = {
		client_id: `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}`,
		redirect_uri: `${process.env.REACT_APP_BASE_URL}`,
		authorize_url: `https://accounts.spotify.com/authorize`,
		scope: [
			"user-read-email",
			"user-read-private",
			"playlist-modify-private",
			"playlist-read-private",
		],
	};

	let redirectUrl = `${config.authorize_url}?client_id=${config.client_id}&response_type=token&redirect_uri=${config.redirect_uri}&scope=${config.scope}`;

	window.location.replace(redirectUrl);
};

// Get user info
export const getUserInfo = async (token: string): Promise<UserProfile> => {
	try {
		const response = await fetch("https://api.spotify.com/v1/me/", {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		});
		const userData = await response.json();
		return userData;
	} catch (e) {
		throw e;
	}
};
