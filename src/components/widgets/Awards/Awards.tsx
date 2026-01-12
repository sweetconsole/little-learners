import { type FC } from "react"
import {
	Section,
	Footnote,
	Title,
	Description,
	CardListItem,
	ContainerList
} from "../../shared"
import { awards } from "./awards.data.ts"
import styles from "./Awards.module.scss"

const Awards: FC = () => {
	return (
		<Section id="awards">
			<Footnote title="Our Achievements" />
			<Title>Our Awards and Recognitions</Title>
			<Description>
				Little Learners Academy takes pride in our commitment to delivering
				high-quality education and outstanding student experiences. We are
				honored to have received various awards and recognitions for our
				dedication to early childhood education. These accolades reflect our
				team's relentless efforts in creating an exceptional learning
				environment for our students.
			</Description>

			<ContainerList className={styles.awards}>
				{awards.map((award, index) => (
					<CardListItem icon={award.icon} key={index} shadow>
						<CardListItem.Title>{award.title}</CardListItem.Title>
						<CardListItem.Description>
							{award.description}
						</CardListItem.Description>
					</CardListItem>
				))}
			</ContainerList>
		</Section>
	)
}

export default Awards
