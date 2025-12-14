import { type FC } from "react"
import { Footnote, Title, Subtitle } from "../../shared"
import styles from "./Benefits.module.scss"

const Benefits: FC = () => {
	return (
		<section className={styles.block}>
			<Footnote title="Children Deserve Bright Future" />
			<Title>Our Benefits</Title>
			<Subtitle>
				With a dedicated team of experienced educators, state-of-the-art
				facilities, and a comprehensive curriculum, we aim to lay a strong
				foundation for your child's future.
			</Subtitle>
		</section>
	)
}

export default Benefits
