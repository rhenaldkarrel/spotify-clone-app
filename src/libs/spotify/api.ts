const endpoint = "https://api.spotify.com/v1";

type NewPlaylist = {
	name: string;
	description: string;
};

// Get recommendations tracks
export const getTopItems = async (token: string) => {
	try {
		const response = await fetch(`${endpoint}/me/top/tracks`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		const data = await response.json();
		const tracks = data.items;
		return tracks;
	} catch (e) {
		throw e;
	}
};

// Search for tracks
export const getTracks = async (keyword: string, token: string) => {
	try {
		const response = await fetch(`${endpoint}/search?q=${keyword}&type=track`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		const res = await response.json();
		const data = await res.tracks.items;
		return data;
	} catch (e) {
		throw e;
	}
};

export const createPlaylist = async (
	userId: string | undefined,
	playlistData: NewPlaylist,
	tracksToAdd: string[],
	token: string
) => {
	try {
		const response = await fetch(`${endpoint}/users/${userId}/playlists`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: playlistData.name,
				description: playlistData.description,
				public: false,
				collaborative: false,
			}),
		});
		const playlist = await response.json();
		addTracksToPlaylist(playlist.id, tracksToAdd, token);
	} catch (e) {
		throw e;
	}
};

export const addTracksToPlaylist = async (
	id: string,
	tracks: string[],
	token: string
) => {
	try {
		const response = await fetch(`${endpoint}/playlists/${id}/tracks`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				uris: tracks,
			}),
		});
		return response;
	} catch (e) {
		throw e;
	}
};
