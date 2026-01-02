import { type FC, useState } from "react"
import { Section, Footnote, Title, Subtitle } from "../../shared"
import styles from "./FAQ.module.scss"
import { answers } from "./faq.data.ts"

const Faq: FC = () => {
	const [selected, setSelected] = useState<number | null>(0)

	const toggle = (id: number) => {
		if (selected === id) return setSelected(null)

		setSelected(id)
	}

	return (
		<Section id="faq">
			<Footnote title="Solutions For The Doubts" />
			<Title>Frequently Asked Questions</Title>
			<Subtitle>
				Find all the essential information you need in our FAQ section, designed
				to address the most frequently asked questions and help you make
				informed decisions for your child's education.
			</Subtitle>

			<div className={styles.accordion}>
				{answers.map((answer, index) => (
					<div
						className={selected === index ? styles.item_active : styles.item}
						key={index}
						onClick={() => toggle(index)}
					>
						<div className={styles.content}>
							<div className={styles.question}>
								<h3 className={styles.title}>{answer.question}</h3>
							</div>
							<div
								className={
									selected === index ? styles.answer_active : styles.answer
								}
							>
								<div className={styles.line}></div>
								<p className={styles.text}>{answer.answer}</p>
							</div>
						</div>

						<button
							className={
								selected === index ? styles.button_active : styles.button
							}
							aria-label="Show answer"
						></button>
					</div>
				))}
			</div>
		</Section>
	)
}

export default Faq
