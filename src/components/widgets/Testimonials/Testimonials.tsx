import { type FC } from "react"
import { Section, Footnote, Title, Subtitle } from "../../shared"
import TestimonialsSwiper from "./TestimonialsSwiper/TestimonialsSwiper.tsx"
import styles from "./Testimonials.module.scss"

const Testimonials: FC = () => {
	return (
		<Section>
			<Footnote title="Their Happy Words 🤗" />
			<Title>Our Testimonials</Title>
			<Subtitle>
				Our testimonials are heartfelt reflections of the nurturing environment
				we provide, where children flourish both academically and emotionally.
			</Subtitle>

			<TestimonialsSwiper />
		</Section>
	)
}

export default Testimonials
