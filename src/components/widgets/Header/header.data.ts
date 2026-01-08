import type { PictureAssets } from "../../../utils/assets.types.ts"
import { pagesConfig } from "../../../utils/pages.config.ts"

type Link = {
	path: string
	label: string
	select: boolean
}

export const links: Array<Link> = [
	{
		path: pagesConfig.home,
		label: "Home",
		select: false
	},
	{
		path: pagesConfig.about,
		label: "About Us",
		select: false
	},
	{
		path: pagesConfig.academics,
		label: "Academics",
		select: false
	},
	{
		path: pagesConfig.admissions,
		label: "Admissions",
		select: false
	},
	{
		path: pagesConfig.studentLife,
		label: "Student Life",
		select: false
	},
	{
		path: pagesConfig.contact,
		label: "Contact",
		select: true
	}
]

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
