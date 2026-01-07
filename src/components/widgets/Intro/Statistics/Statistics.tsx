import { type FC, Fragment } from "react"
import { Card } from "../../../shared"
import { statistics } from "./Statistics.data.ts"
import styles from "./Statistics.module.scss"

const Statistics: FC = () => {
	return (
		<Card className={styles.statistics}>
			{statistics.map((statistic, index) => (
				<Fragment key={index}>
					{statistic.type == "value" ? (
						<div className={styles.statistic}>
							<h2 className={styles.value}>+{statistic.value}</h2>
							<p className={styles.title}>{statistic.title}</p>
						</div>
					) : (
						<div className={styles.line}></div>
					)}
				</Fragment>
			))}
		</Card>
	)
}

export default Statistics
