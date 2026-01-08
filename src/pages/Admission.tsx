import { type FC } from "react"
import { PageLayout } from "../components/layouts/"
import { Description, Footnote, PageBanner, Title } from "../components/shared"

const Admission: FC = () => {
	return (
		<PageLayout>
			<PageBanner>
				<PageBanner.Left>
					<Footnote title="Admission" />
					<Title>Join Our Family of Young Learners</Title>
				</PageBanner.Left>

				<PageBanner.Right>
					<Description>
						At Little Learners Academy, we welcome you to embark on an exciting
						educational journey for your child. Our admission process is
						designed to be transparent, straightforward, and inclusive. Here's a
						step-by-step guide to joining our school
					</Description>
				</PageBanner.Right>
			</PageBanner>
		</PageLayout>
	)
}

export default Admission
