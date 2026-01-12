import type { PictureAssets } from "../../../utils/assets.types.ts"

export type Award = {
	icon: PictureAssets
	title: string
	description: string
}

export const Chart: PictureAssets = {
	attributes: {
		src: "/images/awards/chart-desktop.svg"
	},
	sources: [
		{
			srcSet: "/images/awards/chart-laptop.svg",
			media: "(max-width: 1439px)"
		}
	]
}

export const Statistics: PictureAssets = {
	attributes: {
		src: "/images/awards/statistics-desktop.svg"
	},
	sources: [
		{
			srcSet: "/images/awards/statistics-laptop.svg",
			media: "(max-width: 1439px)"
		}
	]
}

export const Lightning: PictureAssets = {
	attributes: {
		src: "/images/awards/lightning-desktop.svg"
	},
	sources: [
		{
			srcSet: "/images/awards/lightning-laptop.svg",
			media: "(max-width: 1439px)"
		}
	]
}

export const awards: Array<Award> = [
	{
		icon: Chart,
		title: "Outstanding Early Childhood Education Award",
		description:
			"Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment."
	},
	{
		icon: Statistics,
		title: "Innovative STEAM Education Award",
		description:
			"Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners."
	},
	{
		icon: Lightning,
		title: "Environmental Stewardship Award",
		description:
			"Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students."
	}
]
