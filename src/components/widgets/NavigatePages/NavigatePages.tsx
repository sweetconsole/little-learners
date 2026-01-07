import { type FC } from "react"
import { Section, Footnote, Title, Subtitle, ContainerList } from "../../shared"
import { pages } from "./navigatePages.data.ts"
import NavigatePage from "./NavigatePage/NavigatePage.tsx"
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

			<ContainerList className={styles.pages}>
				{pages.map((page, index) => (
					<NavigatePage key={index} {...page} />
				))}
			</ContainerList>
		</Section>
	)
}

export default NavigatePages
