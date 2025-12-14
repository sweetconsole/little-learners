import { type FC } from "react"
import styles from "./Title.module.scss"

interface TitleProps {
	title?: string
	children?: string
}

const Title: FC<TitleProps> = ({ title, children }) => {
	return <h2 className={styles.title}>{title ? title : children}</h2>
}

export default Title
