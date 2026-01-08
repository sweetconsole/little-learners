import { type FC } from "react"
import { PageLayout } from "../components/layouts/"
import { Description, Footnote, PageBanner, Title } from "../components/shared"

const Contact: FC = () => {
	return (
		<PageLayout>
			<PageBanner>
				<PageBanner.Left>
					<Footnote title="Contact Us" />
					<Title>Feel Free To Connect With Us</Title>
				</PageBanner.Left>

				<PageBanner.Right>
					<Description>
						We value open communication and are eager to assist you with any
						inquiries. Feel free to reach out to us through any of the following
						contact methods
					</Description>
				</PageBanner.Right>
			</PageBanner>
		</PageLayout>
	)
}

export default Contact
