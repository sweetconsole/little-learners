import { type FC, Fragment } from "react"
import { Picture, CardListItem } from "../../../shared"
import {
	type TestimonialType,
	StarFill,
	StarEmpty,
	FemaleAvatar,
	MaleAvatar
} from "../testimonials.data.ts"
import styles from "./Testimonial.module.scss"

const Testimonial: FC<TestimonialType> = ({ gender, stars, name, text }) => {
	return (
		<CardListItem className={styles.testimonial}>
			<div className={styles.author}>
				<div className={styles.avatar}>
					<Picture assets={gender == "male" ? MaleAvatar : FemaleAvatar} />
				</div>

				<h2 className={styles.name}>{name}</h2>
			</div>

			<div className={styles.stars}>
				{[...Array(5)].map((_, index) => (
					<Fragment key={index}>
						<Picture
							className={styles.star}
							assets={index < stars ? StarFill : StarEmpty}
						/>
					</Fragment>
				))}
			</div>

			<p className={styles.text}>{text}</p>
		</CardListItem>
	)
}

export default Testimonial
