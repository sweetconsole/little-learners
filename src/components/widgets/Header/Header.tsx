import { type FC } from "react"
import { Link, useLocation } from "react-router-dom"
import clsx from "clsx"
import { Picture } from "../../shared"
import { links, Logo } from "./header.data.ts"
import styles from "./Header.module.scss"

const Header: FC = () => {
	const location = useLocation()

	const stylesLink = (link: string, select: boolean) => {
		if (select) {
			return clsx(styles.link_selected, styles.link)
		}
		return clsx(link == location.pathname && styles.link_active, styles.link)
	}

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Picture className={styles.logo_image} assets={Logo} />
			</div>

			<nav className={styles.navigation}>
				{links.map((link, index) => (
					<Link
						className={stylesLink(link.path, link.select)}
						to={link.path}
						key={index}
					>
						{link.label}
					</Link>
				))}
			</nav>

			<div className={styles.menu}>
				<button className={styles.menu_button}>
					<div></div>
					<div></div>
					<div></div>
				</button>
			</div>
		</header>
	)
}

export default Header
