import { type FC } from "react"
import clsx from "clsx"
import type { CardListItemProps } from "./card.interface.ts"
import styles from "./Card.module.scss"
import { Picture } from "../index.ts"

const CardListItem: FC<CardListItemProps> = ({
	children,
	className,
	shadow,
	onClick,
	icon
}) => {
	return (
		<div
			className={clsx(className, shadow && styles.shadow, styles.card)}
			onClick={onClick}
		>
			{icon && (
				<div className={styles.icon_container}>
					<Picture className={styles.icon} assets={icon} />
				</div>
			)}
			{children}
		</div>
	)
}

export default CardListItem
