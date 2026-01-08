import { type PictureAssets } from "../../../utils/assets.types.ts"
import styles from "./MissionAndVisions.module.scss"

type Item = {
	title: string
	icon: PictureAssets
	description: string
	stylesIcon: string
}

const MissionIcon: PictureAssets = {
	attributes: {
		src: "/images/missionAndVisions/mission-icon-desktop.svg"
	},
	sources: [
		{
			srcSet: "/images/missionAndVisions/mission-icon-mobile.svg",
			media: "(max-width: 767px)"
		},
		{
			srcSet: "/images/missionAndVisions/mission-icon-laptop.svg",
			media: "(max-width: 1439px)"
		}
	]
}

const VisionsIcon: PictureAssets = {
	attributes: {
		src: "/images/missionAndVisions/vision-icon-desktop.svg"
	},
	sources: [
		{
			srcSet: "/images/missionAndVisions/vision-icon-mobile.svg",
			media: "(max-width: 767px)"
		},
		{
			srcSet: "/images/missionAndVisions/vision-icon-laptop.svg",
			media: "(max-width: 1439px)"
		}
	]
}

export const items: Array<Item> = [
	{
		title: "Mission",
		icon: MissionIcon,
		description:
			"At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.",
		stylesIcon: styles.icon_mission
	},
	{
		title: "Vision",
		icon: VisionsIcon,
		description:
			"Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.",
		stylesIcon: styles.icon_visions
	}
]
