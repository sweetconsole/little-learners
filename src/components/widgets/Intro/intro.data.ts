import type { PictureAssets } from "../../../utils/assets.types.ts"

export const Photo: PictureAssets = {
	attributes: {
		src: "/images/intro/photo/photo-desktop.png"
	},
	sources: [
		{
			srcSet: "/images/intro/photo/photo-mobile.png",
			media: "(max-width: 767px)"
		},
		{
			srcSet: "/images/intro/photo/photo-laptop.png",
			media: "(max-width: 1439px)"
		}
	]
}

export const Decoration: PictureAssets = {
	attributes: {
		src: "/images/intro/decoration/decoration-desktop.png"
	},
	sources: [
		{
			srcSet: "/images/intro/decoration/decoration-mobile.png",
			media: "(max-width: 767px)"
		},
		{
			srcSet: "/images/intro/decoration/decoration-laptop.png",
			media: "(max-width: 1439px)"
		}
	]
}
