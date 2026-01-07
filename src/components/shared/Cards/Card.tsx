import { type FC } from "react"
import clsx from "clsx"
import type { CardProps } from "./card.interface.ts"
import styles from "./Card.module.scss"

const Card: FC<CardProps> = ({ children, className, shadow, onClick }) => {
	return (
		<div
			className={clsx(className, shadow && styles.shadow, styles.card)}
			onClick={onClick}
		>
			{children}
		</div>
	)
}

export default Card
