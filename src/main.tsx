import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./assets/styles/reset.scss"
import "./assets/styles/swiper.scss"
import "./assets/styles/general.scss"

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
)
