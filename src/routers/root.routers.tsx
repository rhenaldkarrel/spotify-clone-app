import React, { lazy, LazyExoticComponent } from "react";

export type RouterState = {
	path: string;
	exact: boolean;
	component: LazyExoticComponent<React.FC>;
};

export const Routers: RouterState[] = [
	{
		path: "/create-playlist",
		exact: true,
		component: lazy(() => {
			return new Promise((resolve) => setTimeout(resolve, 2000)).then(
				() => import("pages/home")
			);
		}),
	},
];
