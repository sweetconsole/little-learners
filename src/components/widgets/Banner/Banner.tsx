import { type FC } from "react"
import { Link } from "react-router-dom"
import { Picture } from "../../shared"
import { pagesConfig } from "../../../utils/pages.config.ts"
import { Arrow } from "./banner.data.ts"
import styles from "./Banner.module.scss"

const Banner: FC = () => {
	return (
		<Link className={styles.banner} to={pagesConfig.admissions}>
			<p className={styles.text}>Admission is Open, Grab your seat now</p>
			<Picture className={styles.arrow} assets={Arrow} />
		</Link>
	)
}

export default Banner
