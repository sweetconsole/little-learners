import { type FC } from "react"
import { Card } from "../../shared"
import UpperBlock from "./UpperBlock/UpperBlock.tsx"
import LowerBlock from "./LowerBlock/LowerBlock.tsx"
import styles from "./Footer.module.scss"

const Footer: FC = () => {
	return (
		<footer>
			<Card className={styles.footer} shadow>
				<UpperBlock />
				<LowerBlock />
			</Card>
		</footer>
	)
}

export default Footer
