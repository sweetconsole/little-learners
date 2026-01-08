import { type FC } from "react"
import styles from "./Description.module.scss"

interface DescriptionProps {
	text?: string
	children?: string
}

const Description: FC<DescriptionProps> = ({ text, children }) => {
	return <p className={styles.text}>{text ? text : children}</p>
}

export default Description
