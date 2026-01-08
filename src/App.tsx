import { type FC, useEffect } from "react"
import { Route, Routes } from "react-router"
import { AnimatePresence } from "framer-motion"
import {
	widthDesktop,
	widthLaptop,
	widthMobile,
	heightDesktop,
	heightLaptop,
	heightMobile,
	notLaptop,
	notMobile
} from "./utils/adaptive.constants.ts"
import { pagesConfig } from "./utils/pages.config.ts"
import {
	Academics,
	Home,
	About,
	Contact,
	Admission,
	StudentLife
} from "./pages"
import { ScrollToTop } from "./components/utils/"
import styles from "./App.module.scss"

const App: FC = () => {
	useEffect(() => {
		const typingScreen = () => {
			const width = window.screen.width
			const height = window.screen.height

			if (width > notLaptop) {
				if (width / height >= widthDesktop / heightDesktop) {
					document.getElementById("html")!.className = "landscape-desktop"
				} else {
					document.getElementById("html")!.className = "portrait-desktop"
				}
			} else if (width > notMobile) {
				if (width / height >= widthLaptop / heightLaptop) {
					document.getElementById("html")!.className = "landscape-laptop"
				} else {
					document.getElementById("html")!.className = "portrait-laptop"
				}
			} else {
				if (width / height >= widthMobile / heightMobile) {
					document.getElementById("html")!.className = "landscape-mobile"
				} else {
					document.getElementById("html")!.className = "portrait-mobile"
				}
			}
		}

		window.addEventListener("resize", typingScreen)

		typingScreen()
	}, [])

	return (
		<AnimatePresence mode="wait">
			<div className={styles.container}>
				<ScrollToTop />

				<Routes>
					<Route path={pagesConfig.home} element={<Home />} />
					<Route path={pagesConfig.about} element={<About />} />
					<Route path={pagesConfig.academics} element={<Academics />} />
					<Route path={pagesConfig.admissions} element={<Admission />} />
					<Route path={pagesConfig.studentLife} element={<StudentLife />} />
					<Route path={pagesConfig.contact} element={<Contact />} />
				</Routes>
			</div>
		</AnimatePresence>
	)
}

export default App
