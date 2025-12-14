import { type FC } from "react"
import { Picture } from "../../../shared"
import { Arrow } from "../header.data.ts"
import styles from "./Banner.module.scss"

const Banner: FC = () => {
	return (
		<div className={styles.banner}>
			<p className={styles.text}>Admission is Open, Grab your seat now</p>
			<Picture className={styles.arrow} assets={Arrow} />
		</div>
	)
}

export default Banner
