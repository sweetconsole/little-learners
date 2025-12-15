import type { PictureAssets } from "../../../utils/assets.types.ts"

export type Benefit = {
	icon: PictureAssets
	title: string
	description: string
}

const IconOne: PictureAssets = {
	attributes: {
		src: "/images/benefits/icon-1-desktop.svg"
	},
	sources: [
		{
			srcSet: "/images/benefits/icon-1-laptop.svg",
			media: "(max-width: 1439px)"
		}
	]
}

const IconTwo: PictureAssets = {
	attributes: {
		src: "/images/benefits/icon-2-desktop.svg"
	},
	sources: [
		{
			srcSet: "/images/benefits/icon-2-laptop.svg",
			media: "(max-width: 1439px)"
		}
	]
}

const IconThree: PictureAssets = {
	attributes: {
		src: "/images/benefits/icon-3-desktop.svg"
	},
	sources: [
		{
			srcSet: "/images/benefits/icon-3-laptop.svg",
			media: "(max-width: 1439px)"
		}
	]
}

const IconFour: PictureAssets = {
	attributes: {
		src: "/images/benefits/icon-4-desktop.svg"
	},
	sources: [
		{
			srcSet: "/images/benefits/icon-4-laptop.svg",
			media: "(max-width: 1439px)"
		}
	]
}

const IconFive: PictureAssets = {
	attributes: {
		src: "/images/benefits/icon-5-desktop.svg"
	},
	sources: [
		{
			srcSet: "/images/benefits/icon-5-laptop.svg",
			media: "(max-width: 1439px)"
		}
	]
}

const IconSix: PictureAssets = {
	attributes: {
		src: "/images/benefits/icon-6-desktop.svg"
	},
	sources: [
		{
			srcSet: "/images/benefits/icon-6-laptop.svg",
			media: "(max-width: 1439px)"
		}
	]
}

export const benefits: Array<Benefit> = [
	{
		icon: IconOne,
		title: "Holistic Learning Approach",
		description:
			"Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education."
	},
	{
		icon: IconTwo,
		title: "Experienced Educators",
		description:
			"Our passionate and qualified teachers create a supportive and stimulating learning environment."
	},
	{
		icon: IconThree,
		title: "Nurturing Environment",
		description:
			"We prioritize safety and provide a warm and caring atmosphere for every child."
	},
	{
		icon: IconFour,
		title: "Play-Based Learning",
		description:
			"We believe in the power of play to foster creativity, problem-solving skills, and imagination."
	},
	{
		icon: IconFive,
		title: "Individualized Attention",
		description:
			"Our small class sizes enable personalized attention, catering to each child's unique needs."
	},
	{
		icon: IconSix,
		title: "Parent Involvement",
		description:
			"We foster a strong parent-school partnership to ensure seamless communication and collaboration."
	}
]
