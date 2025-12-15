import { type FC, Fragment } from "react"
import { statistics } from "./Statistics.data.ts"
import styles from "./Statistics.module.scss"

const Statistics: FC = () => {
	return (
		<div className={styles.statistics}>
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
		</div>
	)
}

export default Statistics
