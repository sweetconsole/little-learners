import { type FC } from "react"
import Statistics from "./Statistics/Statistics.tsx"
import styles from "./Intro.module.scss"

const Intro: FC = () => {
	return (
		<section className={styles.intro}>
			<img className={styles.image} />

			<div className={styles.info}>
				<p className={styles.suptitle}>Welcome to Little Learners Academy</p>
				<h1 className={styles.title}>
					Where Young Minds Blossom and{" "}
					<span className={styles.title_highlighting}>Dreams Take Flight.</span>
				</h1>
				<p className={styles.description}>
					Our kinder garden school provides a nurturing and stimulating
					environment, fostering a love for learning that lasts a lifetime. Join
					us as we embark on an exciting educational journey together!
				</p>

				<Statistics />
			</div>
		</section>
	)
}

export default Intro
