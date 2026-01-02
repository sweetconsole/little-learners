import type { PictureAssets } from "../../../utils/assets.types.ts"
import { pagesConfig } from "../../../utils/pages.config.ts"

type Page = {
	title: string
	description: string
	url: string
}

export const pages: Array<Page> = [
	{
		title: "About Us",
		description:
			"Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education. ",
		url: pagesConfig.about
	},
	{
		title: "Academics",
		description:
			"Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
		url: pagesConfig.academics
	},
	{
		title: "Student Life",
		description:
			"Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
		url: pagesConfig.studentLife
	},
	{
		title: "Admissions",
		description:
			"Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
		url: pagesConfig.admissions
	}
]

export const Arrow: PictureAssets = {
	attributes: {
		src: "/images/navigatePages/arrow_desktop.svg"
	},
	sources: [
		{
			srcSet: "/images/navigatePages/arrow_mobile.svg",
			media: "(max-width: 767px)"
		},
		{
			srcSet: "/images/navigatePages/arrow_laptop.svg",
			media: "(max-width: 1439px)"
		}
	]
}
