import { type FC } from "react"
import { Picture } from "../../../shared"
import { type Benefit as BenefitType } from "../benefits.data.ts"
import styles from "./Benefit.module.scss"

const Benefit: FC<BenefitType> = ({ icon, title, description }) => {
	return (
		<div className={styles.benefit}>
			<div className={styles.icon_container}>
				<Picture className={styles.icon} assets={icon} />
			</div>

			<div className={styles.info}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.description}>{description}</p>
			</div>
		</div>
	)
}

export default Benefit
