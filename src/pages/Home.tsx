import { type FC } from "react"
import {
	Intro,
	Benefits,
	Testimonials,
	FAQ,
	NavigatePages
} from "../components/widgets"

const Home: FC = () => {
	return (
		<>
			<Intro />
			<Benefits />
			<Testimonials />
			<FAQ />
			<NavigatePages />
		</>
	)
}

export default Home
