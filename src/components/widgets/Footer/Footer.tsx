import { type FC } from "react"
import UpperBlock from "./UpperBlock/UpperBlock.tsx"
import LowerBlock from "./LowerBlock/LowerBlock.tsx"
import styles from "./Footer.module.scss"

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<UpperBlock />
			<LowerBlock />
		</footer>
	)
}

export default Footer
