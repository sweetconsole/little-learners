import { type FC } from "react"
import { Footnote, PageBanner, Description, Title } from "../components/shared"
import { MissionAndVisions } from "../components/widgets"

const About: FC = () => {
	return (
		<>
			<PageBanner>
				<PageBanner.Left>
					<Footnote title="Overview" />
					<Title>Welcome to Little Learners Academy</Title>
				</PageBanner.Left>

				<PageBanner.Right>
					<Description>
						A leading kinder garden school dedicated to providing a nurturing
						and stimulating environment for young learners. With a commitment to
						excellence in early education, we believe in shaping curious minds
						and building a strong foundation for a lifelong love of learning.
						Our holistic approach fosters intellectual, social, emotional, and
						physical development, ensuring that each child reaches their full
						potential.
					</Description>
				</PageBanner.Right>
			</PageBanner>

			<MissionAndVisions />
		</>
	)
}

export default About
