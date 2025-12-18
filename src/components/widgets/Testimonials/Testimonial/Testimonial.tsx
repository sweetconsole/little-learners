import { type FC, Fragment } from "react"
import { Picture } from "../../../shared"
import {
	type TestimonialType,
	StarFill,
	StarEmpty
} from "../testimonials.data.ts"
import styles from "./Testimonial.module.scss"

const Testimonial: FC<TestimonialType> = ({ avatar, stars, name, text }) => {
	return (
		<div className={styles.testimonial}>
			<div className={styles.author}>
				<div className={styles.avatar}>
					<Picture assets={avatar} />
				</div>

				<h2 className={styles.name}>{name}</h2>
			</div>

			<div className={styles.stars}>
				{stars.map((star, index) => (
					<Fragment key={index}>
						{star === "fill" ? (
							<Picture className={styles.star} assets={StarFill} />
						) : (
							<Picture className={styles.star} assets={StarEmpty} />
						)}
					</Fragment>
				))}
			</div>

			<p className={styles.text}>{text}</p>
		</div>
	)
}

export default Testimonial
