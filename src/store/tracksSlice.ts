import { createSlice } from "@reduxjs/toolkit";
import { ITrackState } from "types/store";

const initialState: ITrackState = {
	tracks: [],
	selectedTracks: [],
};

export const tracksSlice = createSlice({
	name: "tracks",
	initialState,
	reducers: {
		setTracks: (state, action) => {
			state.tracks = action.payload;
		},
		selectTrack: (state, action) => {
			state.selectedTracks.push(action.payload);
		},
		deselectTrack: (state, action) => {
			state.selectedTracks = state.selectedTracks.filter(
				(track) => track.id !== action.payload.id
			);
		},
		clearSelectedTracks: (state) => {
			state.selectedTracks = [];
		},
	},
});

export const { setTracks, selectTrack, deselectTrack, clearSelectedTracks } =
	tracksSlice.actions;
export default tracksSlice.reducer;
