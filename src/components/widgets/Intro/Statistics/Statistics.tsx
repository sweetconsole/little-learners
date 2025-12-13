import { type FC } from "react"
import { statistics } from "./Statistics.data.ts"
import styles from "./Statistics.module.scss"

const Statistics: FC = () => {
	return (
		<div className={styles.statistics}>
			{statistics.map((statistic, index) => (
				<>
					{statistic.type == "value" ? (
						<div className={styles.statistic} key={index}>
							<h2 className={styles.value}>+{statistic.value}</h2>
							<p className={styles.title}>{statistic.title}</p>
						</div>
					) : (
						<div className={styles.line}></div>
					)}
				</>
			))}
		</div>
	)
}

export default Statistics
