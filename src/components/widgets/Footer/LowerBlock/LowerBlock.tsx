import { type FC } from "react"
import { Link } from "react-router-dom"
import { Picture } from "../../../shared"
import { pagesConfig } from "../../../../utils/pages.config.ts"
import { networks } from "../footer.data.ts"
import styles from "./LowerBlock.module.scss"

const LowerBlock: FC = () => {
	return (
		<div className={styles.lower}>
			<div className={styles.line}></div>

			<div className={styles.info}>
				<nav className={styles.navigation}>
					<Link className={styles.link} to={pagesConfig.termsService}>
						Terms of Service
					</Link>

					<div className={styles.navigation_line}></div>

					<Link className={styles.link} to={pagesConfig.privacyPolicy}>
						Privacy Policy
					</Link>

					<div className={styles.navigation_line}></div>

					<Link className={styles.link} to={pagesConfig.cookiePolicy}>
						Cookie Policy
					</Link>
				</nav>

				<ul className={styles.networks}>
					{networks.map((network, index) => (
						<li key={index}>
							<a className={styles.network} href={network.link}>
								<Picture className={styles.icon} assets={network.icon} />
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
