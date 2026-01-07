import { type FC, type JSX } from "react"
import styles from "./Container.module.scss"

interface Props {
	children: JSX.Element | JSX.Element[]
	className?: string
}

const Container: FC<Props> = ({ children, className }) => {
	return (
		<div
			className={
				className ? [className, styles.container].join(" ") : styles.container
			}
		>
			{children}
		</div>
	)
}

export default Container
