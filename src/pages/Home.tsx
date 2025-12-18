import { type FC } from "react"
import { Intro, Benefits, Testimonials } from "../components/widgets"

const Home: FC = () => {
	return (
		<>
			<Intro />
			<Benefits />
			<Testimonials />
		</>
	)
}

export default Home
