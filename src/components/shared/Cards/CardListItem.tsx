import { type ReactNode } from "react"
import clsx from "clsx"
import type { CardListItemProps } from "./card.interface.ts"
import { Picture } from "../../shared"
import styles from "./Card.module.scss"

interface Props {
	children: ReactNode
}

const CardListItem = ({
	children,
	className,
	shadow,
	onClick,
	icon
}: CardListItemProps) => {
	return (
		<div
			className={clsx(
				className,
				shadow && styles.shadow,
				styles.icon_card,
				styles.card
			)}
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

CardListItem.Title = ({ children }: Props) => (
	<h3 className={styles.title}>{children}</h3>
)

CardListItem.Description = ({ children }: Props) => (
	<p className={styles.description}>{children}</p>
)

export default CardListItem
