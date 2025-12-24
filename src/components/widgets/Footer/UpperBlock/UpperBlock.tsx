import { type FC } from "react"
import { HashLink } from "react-router-hash-link"
import { Picture } from "../../../shared"
import { navigation, Logo, contacts } from "../footer.data.ts"
import styles from "./UpperBlock.module.scss"

const UpperBlock: FC = () => {
	return (
		<div className={styles.upper}>
			<div className={styles.info}>
				<Picture className={styles.logo} assets={Logo} />

				<p className={styles.description}>
					We believe in the power of play to foster creativity, problem-solving
					skills, and imagination.
				</p>

				<ul className={styles.contacts}>
					{contacts.map((contact, index) => (
						<li key={index}>
							<a className={styles.contact} href={contact.link}>
								<div className={styles.icon_block}>
									<Picture className={styles.icon} assets={contact.icon} />
								</div>

								<p className={styles.title}>{contact.title}</p>
							</a>
						</li>
					))}
				</ul>
			</div>

			<nav className={styles.navigation}>
				{navigation.map((part, index) => (
					<ul className={styles.part} key={index}>
						{part.map((link, key) => (
							<li className={styles.block} key={key}>
								<HashLink className={styles.link} to={link.link}>
									{link.title}
								</HashLink>
							</li>
						))}
					</ul>
				))}
			</nav>
		</div>
	)
}

export default UpperBlock
