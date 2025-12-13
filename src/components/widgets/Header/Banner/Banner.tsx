import { type FC } from "react"
import Arrow from "../../../../assets/images/arrow-black.svg"
import styles from "./Banner.module.scss"

const Banner: FC = () => {
	return (
		<div className={styles.banner}>
			<p className={styles.text}>Admission is Open, Grab your seat now</p>
			<img className={styles.arrow} src={Arrow} alt="" />
		</div>
	)
}

export default Banner
