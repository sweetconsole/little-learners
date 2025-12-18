import { type FC } from "react"
import { Intro, Benefits, Testimonials, FAQ } from "../components/widgets"

const Home: FC = () => {
	return (
		<>
			<Intro />
			<Benefits />
			<Testimonials />
			<FAQ />
		</>
	)
}

export default Home
