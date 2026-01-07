import { type FC } from "react"
import { HashLink } from "react-router-hash-link"
import { CardListItem, Picture } from "../../../shared"
import { Arrow, type Page } from "../navigatePages.data.ts"
import styles from "./NavigatePage.module.scss"

const NavigatePage: FC<Page> = ({ title, description, url }) => {
	return (
		<CardListItem className={styles.page} shadow>
			<h2 className={styles.title}>{title}</h2>

			<div className={styles.lines}>
				<div className={styles.circle}></div>

				<div className={styles.line}></div>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
				<div className={styles.line}></div>

				<div className={styles.circle}></div>
			</div>

			<p className={styles.description}>{description}</p>

			<HashLink className={styles.link} to={url}>
				<p className={styles.link_title}>Learn More </p>
				<Picture className={styles.link_icon} assets={Arrow} />
			</HashLink>
		</CardListItem>
	)
}

export default NavigatePage
