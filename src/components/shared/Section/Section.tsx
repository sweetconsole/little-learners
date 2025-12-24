import { type FC, type JSX } from "react"
import styles from "./Section.module.scss"

interface SectionProps {
	children: JSX.Element | JSX.Element[]
	className?: string
	id?: string
}

const Section: FC<SectionProps> = ({ className, children, id }) => {
	return (
		<section className={[className, styles.section].join(" ")} id={id}>
			{children}
		</section>
	)
}

export default Section
