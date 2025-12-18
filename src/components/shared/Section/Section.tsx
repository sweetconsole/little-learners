import { type FC, type JSX } from "react"
import styles from "./Section.module.scss"

interface SectionProps {
	children: JSX.Element | JSX.Element[]
	className?: string
}

const Section: FC<SectionProps> = ({ className, children }) => {
	return (
		<section className={[className, styles.section].join(" ")}>
			{children}
		</section>
	)
}

export default Section
