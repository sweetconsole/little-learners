import type { PictureAssets } from "../../../utils/assets.types.ts"

export type TestimonialType = {
	avatar: PictureAssets
	name: string
	stars: Array<"fill" | "empty">
	text: string
}

export const WomenAvatar: PictureAssets = {
	attributes: {
		src: "/images/testimonials/women_desktop.svg"
	},
	sources: [
		{
			srcSet: "/images/testimonials/women_laptop.svg",
			media: "(max-width: 1439px)"
		}
	]
}

export const MenAvatar: PictureAssets = {
	attributes: {
		src: "/images/testimonials/men_desktop.svg"
	},
	sources: [
		{
			srcSet: "/images/testimonials/men_laptop.svg",
			media: "(max-width: 1439px)"
		}
	]
}

export const testimonials: Array<TestimonialType> = [
	{
		avatar: WomenAvatar,
		name: "Jennifer B",
		stars: ["fill", "fill", "fill", "fill", "fill"],
		text: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
	},
	{
		avatar: MenAvatar,
		name: "David K",
		stars: ["fill", "fill", "fill", "fill", "empty"],
		text: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment."
	},
	{
		avatar: WomenAvatar,
		name: "Emily L",
		stars: ["fill", "fill", "fill", "fill", "fill"],
		text: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
	},
	{
		avatar: MenAvatar,
		name: "Andrew N",
		stars: ["fill", "fill", "fill", "fill", "fill"],
		text: "Little Learners Academy feels like an extension of our family. The sense of community parents, teachers, and children is something you won't find anywhere else."
	},
	{
		avatar: MenAvatar,
		name: "Robert F",
		stars: ["fill", "fill", "fill", "fill", "empty"],
		text: "The progress my son has made in just a few months is remarkable. He's not only prepared academically for kindergarten but is also more independent and eager to explore. Highly recommend!"
	},
	{
		avatar: WomenAvatar,
		name: "Ashley H",
		stars: ["fill", "fill", "fill", "fill", "fill"],
		text: "I was anxious about the first day of school, but the incredible staff put both me and my daughter at ease immediately. The communication is excellent, and I always know she's in the best hands."
	},
	{
		avatar: MenAvatar,
		name: "Christopher M",
		stars: ["fill", "fill", "fill", "fill", "empty"],
		text: "From the creative curriculum to the safe and sparkling facilities, every detail at Little Learners Academy is designed with care. It's more than a preschool; it's a foundation for lifelong learning."
	},
	{
		avatar: WomenAvatar,
		name: "Jessica T",
		stars: ["fill", "fill", "fill", "fill", "fill"],
		text: "As a parent, seeing my child develop empathy, patience, and social skills alongside letters and numbers has been incredible. The academy's balanced approach is truly special."
	},
	{
		avatar: WomenAvatar,
		name: "Amanda C",
		stars: ["fill", "fill", "fill", "fill", "empty"],
		text: "We are constantly amazed at what our child brings home—not just crafts, but new words, stories, and curiosity. Thank you, Little Learners, for fostering such a genuine love for discovery."
	}
]

export const Arrow: PictureAssets = {
	attributes: {
		src: "/images/testimonials/arrow_desktop.svg"
	},
	sources: [
		{
			srcSet: "/images/testimonials/arrow_laptop.svg",
			media: "(max-width: 1439px)"
		}
	]
}

export const StarFill: PictureAssets = {
	attributes: {
		src: "/images/testimonials/star_fill_desktop.svg"
	},
	sources: [
		{
			srcSet: "/images/testimonials/star_fill_desktop.svg",
			media: "(max-width: 1439px)"
		}
	]
}

export const StarEmpty: PictureAssets = {
	attributes: {
		src: "/images/testimonials/star_empty_desktop.svg"
	},
	sources: [
		{
			srcSet: "/images/testimonials/star_empty_laptop.svg",
			media: "(max-width: 1439px)"
		}
	]
}
