import { type FC, type MouseEventHandler } from "react"
import { Picture } from "../../../shared"
import { Arrow } from "../testimonials.data.ts"
import styles from "./SwitchSlideButton.module.scss"

interface Props {
	onClick: MouseEventHandler
	ariaLabel: string
}

const SwitchSlideButton: FC<Props> = ({ onClick, ariaLabel }) => {
	return (
		<button
			className={styles.switch_button}
			aria-label={ariaLabel}
			onClick={onClick}
		>
			<div className={styles.switch_button_icon}>
				<Picture assets={Arrow} />
			</div>
		</button>
	)
}

export default SwitchSlideButton
