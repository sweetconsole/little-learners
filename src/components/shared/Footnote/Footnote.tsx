import { type FC } from "react"
import styles from "./Footnote.module.scss"

interface FootnoteProps {
	title?: string
	children?: string
}

const Footnote: FC<FootnoteProps> = ({ title, children }) => {
	return (
		<div className={styles.footnote}>
			<p className={styles.title}>{title ? title : children}</p>
		</div>
	)
}

export default Footnote
