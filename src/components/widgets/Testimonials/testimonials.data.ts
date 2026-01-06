import type { PictureAssets } from "../../../utils/assets.types.ts"

export type TestimonialType = {
	gender: "male" | "female"
	name: string
	stars: number
	text: string
	id?: number
}

export const FemaleAvatar: PictureAssets = {
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

export const MaleAvatar: PictureAssets = {
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
		gender: "female",
		name: "Jennifer B",
		stars: 5,
		text: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
	},
	{
		gender: "male",
		name: "David K",
		stars: 4,
		text: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment."
	},
	{
		gender: "female",
		name: "Emily L",
		stars: 5,
		text: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
	},
	{
		gender: "male",
		name: "Andrew N",
		stars: 5,
		text: "Little Learners Academy feels like an extension of our family. The sense of community parents, teachers, and children is something you won't find anywhere else."
	},
	{
		gender: "male",
		name: "Robert F",
		stars: 4,
		text: "The progress my son has made in just a few months is remarkable. He's not only prepared academically for kindergarten but is also more independent and eager to explore. Highly recommend!"
	},
	{
		gender: "female",
		name: "Ashley H",
		stars: 5,
		text: "I was anxious about the first day of school, but the incredible staff put both me and my daughter at ease immediately. The communication is excellent, and I always know she's in the best hands."
	},
	{
		gender: "male",
		name: "Christopher M",
		stars: 4,
		text: "From the creative curriculum to the safe and sparkling facilities, every detail at Little Learners Academy is designed with care. It's more than a preschool; it's a foundation for lifelong learning."
	},
	{
		gender: "female",
		name: "Jessica T",
		stars: 5,
		text: "As a parent, seeing my child develop empathy, patience, and social skills alongside letters and numbers has been incredible. The academy's balanced approach is truly special."
	},
	{
		gender: "female",
		name: "Amanda C",
		stars: 4,
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
