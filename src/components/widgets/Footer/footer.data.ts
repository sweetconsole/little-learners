import { pagesConfig } from "../../../utils/pages.config.ts"
import type { PictureAssets } from "../../../utils/assets.types.ts"

type Link = {
	title: string
	link: string
}

type Contact = {
	type: "link" | "text"
	title: string
	icon: PictureAssets
	link?: string
}

type Network = {
	link: string
	icon: PictureAssets
}

export const contacts: Array<Contact> = [
	{
		type: "link",
		title: "hello@littlelearners.com",
		link: "mailto:hello@littlelearners.com",
		icon: {
			attributes: {
				src: "/images/footer/icons/mail-desktop.svg"
			},
			sources: [
				{
					srcSet: "/images/footer/icons/mail-laptop.svg",
					media: "(max-width: 1439px)"
				}
			]
		}
	},
	{
		type: "link",
		title: "+91 91813 23 2309",
		link: "tel:+9191813232309",
		icon: {
			attributes: {
				src: "/images/footer/icons/phone-desktop.svg"
			},
			sources: [
				{
					srcSet: "/images/footer/icons/phone-laptop.svg",
					media: "(max-width: 1439px)"
				}
			]
		}
	},
	{
		type: "text",
		title: "Somewhere in the World",
		icon: {
			attributes: {
				src: "/images/footer/icons/map-desktop.svg"
			},
			sources: [
				{
					srcSet: "/images/footer/icons/map-laptop.svg",
					media: "(max-width: 1439px)"
				}
			]
		}
	}
]

export const navigation: Array<Link[]> = [
	[
		{
			title: "Home",
			link: pagesConfig.home
		},
		{
			title: "Features",
			link: `${pagesConfig.home}#features`
		},
		{
			title: "Our Testimonials",
			link: `${pagesConfig.home}#testimonials`
		},
		{
			title: "FAQ",
			link: `${pagesConfig.home}#faq`
		}
	],
	[
		{
			title: "About Us",
			link: pagesConfig.about
		},
		{
			title: "Our Mission",
			link: pagesConfig.about
		},
		{
			title: "Our Vission",
			link: pagesConfig.about
		},
		{
			title: "Awards and Recognitions",
			link: pagesConfig.about
		},
		{
			title: "History",
			link: pagesConfig.about
		},
		{
			title: "Teachers",
			link: pagesConfig.about
		}
	],
	[
		{
			title: "Academics",
			link: pagesConfig.academics
		},
		{
			title: "Special Features",
			link: pagesConfig.academics
		},
		{
			title: "Gallery",
			link: pagesConfig.academics
		}
	],
	[
		{
			title: "Contact Us",
			link: pagesConfig.contact
		},
		{
			title: "Information",
			link: pagesConfig.contact
		},
		{
			title: "Map & Direction",
			link: pagesConfig.contact
		}
	]
]

export const networks: Array<Network> = [
	{
		link: "#",
		icon: {
			attributes: {
				alt: "Facebook",
				src: "/images/footer/networks/facebook-desktop.svg"
			},
			sources: [
				{
					srcSet: "/images/footer/networks/facebook-laptop.svg",
					media: "(max-width: 1439px)"
				}
			]
		}
	},
	{
		link: "#",
		icon: {
			attributes: {
				alt: "Twitter",
				src: "/images/footer/networks/twitter-desktop.svg"
			},
			sources: [
				{
					srcSet: "/images/footer/networks/twitter-laptop.svg",
					media: "(max-width: 1439px)"
				}
			]
		}
	},
	{
		link: "#",
		icon: {
			attributes: {
				alt: "LinkedIn",
				src: "/images/footer/networks/linkedin-desktop.svg"
			},
			sources: [
				{
					srcSet: "/images/footer/networks/linkedin-laptop.svg",
					media: "(max-width: 1439px)"
				}
			]
		}
	}
]

export const Logo: PictureAssets = {
	attributes: {
		src: "/images/footer/logo/logo-desktop.svg"
	},
	sources: [
		{
			srcSet: "/images/footer/logo/logo-laptop.svg",
			media: "(max-width: 1439px)"
		}
	]
}
