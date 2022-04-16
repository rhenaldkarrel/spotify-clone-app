type NewPlaylist = {
	name: string;
	description: string;
};

// Search for tracks
export const getTracks = async (keyword: string, token: string) => {
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

export const createPlaylist = async (
	userId: string,
	playlistData: NewPlaylist,
	tracksToAdd: [],
	token: string
) => {
	const response = await fetch(
		`https://api.spotify.com/v1/users/${userId}/playlists`,
		{
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: playlistData.name,
				description: playlistData.description,
				public: false,
			}),
		}
	);
	const playlist = await response.json();
	addTracksToPlaylist(playlist.id, tracksToAdd, token);
};

export const addTracksToPlaylist = async (
	id: string,
	tracks: [],
	token: string
) => {
	const response = await fetch(
		`https://api.spotify.com/v1/playlists/${id}/tracks`,
		{
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				uris: tracks,
			}),
		}
	);
	return response;
};
