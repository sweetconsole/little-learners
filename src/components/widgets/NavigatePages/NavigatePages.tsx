import { type FC } from "react"
import { Section, Footnote, Title, Subtitle, Picture } from "../../shared"
import { pages, Arrow } from "./navigatePages.data.ts"
import { HashLink } from "react-router-hash-link"
import styles from "./NavigatePages.module.scss"

const NavigatePages: FC = () => {
	return (
		<Section>
			<Footnote title="Explore More" />
			<Title>Navigate through our Pages</Title>
			<Subtitle>
				Your gateway to discovering a wealth of valuable information about our
				kindergarten school, Feel free to explore and learn more about the
				enriching experiences that await your child at our kindergarten school
			</Subtitle>

			<ul className={styles.pages}>
				{pages.map((page, index) => (
					<li className={styles.page} key={index}>
						<h2 className={styles.title}>{page.title}</h2>

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

						<p className={styles.description}>{page.description}</p>

						<HashLink className={styles.link} to={page.url}>
							<p className={styles.link_title}>Learn More </p>
							<Picture className={styles.link_icon} assets={Arrow} />
						</HashLink>
					</li>
				))}
			</ul>
		</Section>
	)
}

export default NavigatePages
