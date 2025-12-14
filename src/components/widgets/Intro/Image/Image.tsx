import { type FC } from "react"
import { Picture } from "../../../shared"
import { Photo, Decoration } from "../intro.data.ts"
import styles from "./Image.module.scss"

const Image: FC = () => {
	return (
		<div className={styles.container}>
			<Picture assets={Photo} />
			<Picture className={styles.decoration} assets={Decoration} />

			<div className={styles.circle}></div>
			<div className={styles.circle}></div>
			<div className={styles.circle}></div>
			<div className={styles.circle}></div>

			<div className={styles.line}></div>
			<div className={styles.line}></div>
			<div className={styles.line}></div>
			<div className={styles.line}></div>
		</div>
	)
}

export default Image
