import { type FC } from "react"
import { PageLayout } from "../components/layouts/"
import {
	Intro,
	Benefits,
	Testimonials,
	FAQ,
	NavigatePages
} from "../components/widgets"

const Home: FC = () => {
	return (
		<PageLayout>
			<Intro />
			<Benefits />
			<Testimonials />
			<FAQ />
			<NavigatePages />
		</PageLayout>
	)
}

export default Home
