import { type ReactNode } from "react"
import { Card, Picture } from "../../shared"
import { Cubes } from "./pageBanner.data..ts"
import styles from "./PageBanner.module.scss"

interface Props {
	children: ReactNode
}

const PageBanner = ({ children }: Props) => {
	return (
		<Card className={styles.banner} shadow>
			<Picture className={styles.decoration} assets={Cubes} />

			<div className={styles.inner}>{children}</div>
		</Card>
	)
}

PageBanner.Left = ({ children }: Props) => <div>{children}</div>

PageBanner.Right = ({ children }: Props) => <div>{children}</div>

export default PageBanner
