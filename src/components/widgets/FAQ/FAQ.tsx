import { type FC } from "react"
import { Section, Footnote, Title, Subtitle } from "../../shared"

const Faq: FC = () => {
	return (
		<Section>
			<Footnote title="Solutions For The Doubts" />
			<Title>Frequently Asked Questions</Title>
			<Subtitle>
				Find all the essential information you need in our FAQ section, designed
				to address the most frequently asked questions and help you make
				informed decisions for your child's education.
			</Subtitle>
		</Section>
	)
}

export default Faq
