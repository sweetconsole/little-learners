import { type FC } from "react"
import { Picture, CardListItem } from "../../../shared"
import { type Benefit as BenefitType } from "../benefits.data.ts"
import styles from "./Benefit.module.scss"

const Benefit: FC<BenefitType> = ({ icon, title, description }) => {
	return (
		<CardListItem className={styles.benefit} shadow>
			<div className={styles.icon_container}>
				<Picture className={styles.icon} assets={icon} />
			</div>

			<div className={styles.info}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.description}>{description}</p>
			</div>
		</CardListItem>
	)
}

export default Benefit
