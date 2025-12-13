import { type FC, useEffect } from "react"
import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
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
import { Home } from "./pages"
import { Header } from "./components/widgets"
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
		<BrowserRouter>
			<div className={styles.container}>
				<Header />

				<Routes>
					<Route path={pagesConfig.home} element={<Home />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
