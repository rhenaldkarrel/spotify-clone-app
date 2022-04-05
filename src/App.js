import React, { useMemo, useState } from "react";
import Home from "./pages/home/index";
import TokenContext from "./context/TokenContext";

const App = () => {
	const [token, setToken] = useState("");

	const value = useMemo(() => ({ token, setToken }), [token]);

	return (
		<TokenContext.Provider value={value}>
			<Home />
		</TokenContext.Provider>
	);
};

export default App;
