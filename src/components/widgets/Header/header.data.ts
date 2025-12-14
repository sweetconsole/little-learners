import type { PictureAssets } from "../../../utils/assets.types.ts"

export const Logo: PictureAssets = {
	attributes: {
		src: "/images/header/logo/logo-desktop.svg"
	},
	sources: [
		{
			srcSet: "/images/header/logo/logo-mobile.svg",
			media: "(max-width: 767px)"
		},
		{
			srcSet: "/images/header/logo/logo-laptop.svg",
			media: "(max-width: 1439px)"
		}
	]
}

export const Arrow: PictureAssets = {
	attributes: {
		src: "/images/header/arrow/arrow-desktop.svg"
	},
	sources: [
		{
			srcSet: "/images/header/arrow/arrow-mobile.svg",
			media: "(max-width: 767px)"
		},
		{
			srcSet: "/images/header/arrow/arrow-laptop.svg",
			media: "(max-width: 1439px)"
		}
	]
}
