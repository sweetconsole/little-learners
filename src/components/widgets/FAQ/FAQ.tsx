import { type FC, useState } from "react"
import { Section, Footnote, Title, Description, Container } from "../../shared"
import AccordionItem from "./AccordionItem/AccordionItem.tsx"
import { answers } from "./faq.data.ts"
import styles from "./FAQ.module.scss"

const Faq: FC = () => {
	const [selected, setSelected] = useState<number | null>(0)

	const midIndex = Math.ceil(answers.length / 2)
	const leftColumn = answers.slice(0, midIndex)
	const rightColumn = answers.slice(midIndex)

	const toggle = (id: number) => {
		if (selected === id) return setSelected(null)

		setSelected(id)
	}

	return (
		<Section id="faq">
			<Footnote title="Solutions For The Doubts" />
			<Title>Frequently Asked Questions</Title>
			<Description>
				Find all the essential information you need in our FAQ section, designed
				to address the most frequently asked questions and help you make
				informed decisions for your child's education.
			</Description>

			<Container className={styles.container}>
				<div className={styles.accordion}>
					{leftColumn.map((answer, index) => (
						<AccordionItem
							selectedIndex={selected}
							currentIndex={index}
							onClick={() => toggle(index)}
							{...answer}
						/>
					))}
				</div>

				<div className={styles.accordion}>
					{rightColumn.map((answer, index) => (
						<AccordionItem
							selectedIndex={selected}
							currentIndex={index + midIndex}
							onClick={() => toggle(index + midIndex)}
							{...answer}
						/>
					))}
				</div>
			</Container>
		</Section>
	)
}

export default Faq
