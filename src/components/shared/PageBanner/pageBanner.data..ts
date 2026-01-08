import type { PictureAssets } from "../../../utils/assets.types.ts"

export const Cubes: PictureAssets = {
	attributes: {
		src: "/images/decorations/cubes-desktop.svg"
	},
	sources: [
		{
			srcSet: "/images/decorations/cubes-mobile.svg",
			media: "(max-width: 767px)"
		},
		{
			srcSet: "/images/decorations/cubes-laptop.svg",
			media: "(max-width: 1439px)"
		}
	]
}
