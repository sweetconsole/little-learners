import { type FC } from "react"
import { networks } from "../footer.data.ts"
import { Picture } from "../../../shared"
import styles from "./LowerBlock.module.scss"

const LowerBlock: FC = () => {
	return (
		<div className={styles.lower}>
			<div className={styles.line}></div>

			<div className={styles.info}>
				<nav className={styles.navigation}>
					<li className={styles.link}>Terms of Service</li>
					<li className={styles.navigation_line}></li>
					<li className={styles.link}>Privacy Policy</li>
					<li className={styles.navigation_line}></li>
					<li className={styles.link}>Cookie Policy</li>
				</nav>

				<ul className={styles.networks}>
					{networks.map((network, index) => (
						<li key={index}>
							<a className={styles.network} href={network.link}>
								<Picture assets={network.icon} />
							</a>
						</li>
					))}
				</ul>
			</div>

			<div className={styles.line}></div>

			<p className={styles.copyright}>
				Copyright © [2023] Little Learners Academy. All rights reserved.
			</p>
		</div>
	)
}

export default LowerBlock
