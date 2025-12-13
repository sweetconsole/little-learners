import { type FC } from "react"
import Banner from "./Banner/Banner.tsx"
import NavBar from "./NavBar/NavBar.tsx"
import styles from "./Header.module.scss"

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Banner />
			<NavBar />
		</header>
	)
}

export default Header
