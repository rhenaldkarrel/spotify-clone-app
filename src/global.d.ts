declare module "*.jpg" {
	export default "" as string;
}
declare module "*.png" {
	export default "" as string;
}

declare module "*.module.css" {
	const classes: { [key: string]: string };
	export default classes;
}

declare module "react-router-dom";
