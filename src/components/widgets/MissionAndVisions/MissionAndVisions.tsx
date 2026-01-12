import { type FC } from "react"
import {
	CardListItem,
	ContainerList,
	Description,
	Footnote,
	Picture,
	Section,
	Title
} from "../../shared"
import { items } from "./missionAndVisions.ts"
import styles from "./MissionAndVisions.module.scss"
import clsx from "clsx"

const MissionAndVisions: FC = () => {
	return (
		<Section id="mission-and-visions">
			<Footnote title="Mission & Visions" />
			<Title>Our Mission & Visions</Title>
			<Description>
				We are here to provide a nurturing and inclusive environment where young
				minds can thrive, fostering a love for learning and personal growth.
			</Description>

			<ContainerList className={styles.list}>
				{items.map((item, index) => (
					<CardListItem className={styles.item} shadow key={index}>
						<header className={styles.header}>
							<h3 className={styles.title}>{item.title}</h3>
							<Picture
								className={clsx(item.stylesIcon, styles.icon)}
								assets={item.icon}
							/>
						</header>

						<p className={styles.description}>{item.description}</p>
					</CardListItem>
				))}
			</ContainerList>
		</Section>
	)
}

export default MissionAndVisions
