import { UserProfile, Track } from "./spotify";

export interface IAuthState {
	isAuthenticated: boolean;
	accessToken: string;
	userInfo: UserProfile | null;
}

export interface ITrackState {
	tracks: Track[];
	selectedTracks: Track[];
}
