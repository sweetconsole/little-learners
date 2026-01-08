import { type FC } from "react"
import {
	Section,
	Footnote,
	Title,
	Description,
	ContainerList
} from "../../shared"
import { benefits } from "./benefits.data.ts"
import Benefit from "./Benefit/Benefit.tsx"
import styles from "./Benefits.module.scss"

const Benefits: FC = () => {
	return (
		<Section id="features">
			<Footnote title="Children Deserve Bright Future" />
			<Title>Our Benefits</Title>
			<Description>
				With a dedicated team of experienced educators, state-of-the-art
				facilities, and a comprehensive curriculum, we aim to lay a strong
				foundation for your child's future.
			</Description>

			<ContainerList className={styles.benefits}>
				{benefits.map((benefit, index) => (
					<Benefit key={index} {...benefit} />
				))}
			</ContainerList>
		</Section>
	)
}

export default Benefits
