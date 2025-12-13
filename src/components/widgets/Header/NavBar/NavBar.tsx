import { type FC } from "react"
import { Link, useLocation } from "react-router-dom"
import Logo from "../../../../assets/images/logo.svg"
import { pagesConfig } from "../../../../utils/pages.config.ts"
import styles from "./NavBar.module.scss"

const NavBar: FC = () => {
	const location = useLocation()

	const getStyleLink = (link: string) => {
		if (link == location.pathname) {
			return styles.link_selected
		}

		return styles.link
	}

	return (
		<div className={styles.navbar}>
			<div className={styles.logo}>
				<img className={styles.logo_image} src={Logo} alt="" />
			</div>

			<nav className={styles.navigation}>
				<div className={getStyleLink(pagesConfig.home)}>
					<Link to={pagesConfig.home}>Home</Link>
				</div>
				<div className={getStyleLink(pagesConfig.about)}>
					<Link to={pagesConfig.about}>About Us</Link>
				</div>
				<div className={getStyleLink(pagesConfig.academics)}>
					<Link to={pagesConfig.academics}>Academics</Link>
				</div>
				<div className={getStyleLink(pagesConfig.admissions)}>
					<Link to={pagesConfig.admissions}>Admissions</Link>
				</div>
				<div className={getStyleLink(pagesConfig.studentLife)}>
					<Link to={pagesConfig.studentLife}>Student Life</Link>
				</div>
				<div className={styles.link_accent}>
					<Link to={pagesConfig.contact}>Contact</Link>
				</div>
			</nav>
		</div>
	)
}

export default NavBar
