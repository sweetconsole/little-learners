import { type FC } from "react"
import styles from "./Subtitle.module.scss"

interface SubtitleProps {
	text?: string
	children?: string
}

const Subtitle: FC<SubtitleProps> = ({ text, children }) => {
	return <p className={styles.text}>{text ? text : children}</p>
}

export default Subtitle
