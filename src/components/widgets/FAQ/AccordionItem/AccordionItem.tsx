import { type FC, type MouseEventHandler } from "react"
import clsx from "clsx"
import { CardListItem } from "../../../shared"
import { type Answer } from "../faq.data.ts"
import styles from "./AccordionItem.module.scss"

interface Props extends Answer {
	selectedIndex: number | null
	currentIndex: number
	onClick: MouseEventHandler
}

const AccordionItem: FC<Props> = ({
	question,
	answer,
	selectedIndex,
	currentIndex,
	onClick
}) => {
	return (
		<CardListItem
			className={clsx(
				selectedIndex == currentIndex && styles.item_active,
				styles.item
			)}
			onClick={onClick}
		>
			<div className={styles.content}>
				<div className={styles.question}>
					<h3 className={styles.title}>{question}</h3>
				</div>
				<div
					className={clsx(
						selectedIndex == currentIndex && styles.answer_active,
						styles.answer
					)}
				>
					<div className={styles.line}></div>
					<p className={styles.text}>{answer}</p>
				</div>
			</div>

			<button
				className={clsx(
					selectedIndex == currentIndex && styles.button_active,
					styles.button
				)}
				aria-label="Show answer"
			></button>
		</CardListItem>
	)
}

export default AccordionItem
