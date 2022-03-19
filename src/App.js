import Playlists from "./components/Playlists";
import FormCreatePlaylist from "./components/FormCreatePlaylist";

const App = () => {
	// Playlists Data
	const playlists = [
		{
			img: "https://cf.shopee.co.id/file/9c08c37bac8d3c63b76f7db91e855c15",
			createdAt: "September 23, 2019",
			album: "Feel Special",
			artist: "Twice",
		},
		{
			img: "https://upload.wikimedia.org/wikipedia/en/1/17/TheStoryBegins.jpg",
			createdAt: "October 20, 2015",
			album: "The Story Begins",
			artist: "Twice",
		},
		{
			img: "https://upload.wikimedia.org/wikipedia/id/9/93/TWICEcoaster_LANE_1_Cover.jpg",
			createdAt: "October 24, 2016",
			album: "TWICEcoaster: Lane 1",
			artist: "Twice",
		},
		{
			img: "https://upload.wikimedia.org/wikipedia/id/8/8f/What_Is_Love%3F.jpg",
			createdAt: "April 9, 2018",
			album: "What is Love?",
			artist: "Twice",
		},
		{
			img: "https://i.scdn.co/image/ab67616d0000b273cc72cf8eb5fc820d2cb571d6",
			createdAt: "October 22, 2018",
			album: "Stay By My Side",
			artist: "Twice",
		},
		{
			img: "https://upload.wikimedia.org/wikipedia/en/c/c7/Twice_%E2%80%93_Yes_or_Yes.png",
			createdAt: "November 5, 2018",
			album: "YES or YES",
			artist: "Twice",
		},
		{
			img: "https://upload.wikimedia.org/wikipedia/en/7/79/Twice_BDZ.jpeg",
			createdAt: "September 12, 2018",
			album: "BDZ",
			artist: "Twice",
		},
		{
			img: "https://upload.wikimedia.org/wikipedia/id/b/bf/Twice_Summer_Nights.jpg",
			createdAt: "July 9, 2018",
			album: "Summer Nights",
			artist: "Twice",
		},
		// {
		//   img:
		//     "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Twice2-Standard_edition_%28album_cover%29.jpeg/220px-Twice2-Standard_edition_%28album_cover%29.jpeg",
		//   createdAt: "March 6, 2019",
		//   album: "#TWICE2",
		//   artist: "Twice"
		// }
	];

	return (
		<div>
			<FormCreatePlaylist />
			<Playlists items={playlists} />
		</div>
	);
};

export default App;
