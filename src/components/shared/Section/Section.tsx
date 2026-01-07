import { type FC, type JSX } from "react"
import clsx from "clsx"
import styles from "./Section.module.scss"

interface SectionProps {
	children: JSX.Element | JSX.Element[]
	className?: string
	id?: string
}

const Section: FC<SectionProps> = ({ className, children, id }) => {
	return (
		<section className={clsx(className, styles.section)} id={id}>
			{children}
		</section>
	)
}

export default Section
