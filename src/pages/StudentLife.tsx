import { type FC } from "react"
import { PageLayout } from "../components/layouts/"
import { Description, Footnote, PageBanner, Title } from "../components/shared"

const StudentLife: FC = () => {
	return (
		<PageLayout>
			<PageBanner>
				<PageBanner.Left>
					<Footnote title="Enriching Student Life" />
					<Title>Embracing Learning with Discovery and Joy</Title>
				</PageBanner.Left>

				<PageBanner.Right>
					<Description>
						Welcome to our Student Life page, where the magic of childhood comes
						alive through the enriching experiences and adventures that our
						students embark on each day. At our kindergarten school, we believe
						that learning goes beyond textbooks, and we strive to create a
						holistic and engaging environment that nurtures every aspect of a
						child's development.
					</Description>
				</PageBanner.Right>
			</PageBanner>
		</PageLayout>
	)
}

export default StudentLife
