import { type FC } from "react"
import { Description, Footnote, PageBanner, Title } from "../components/shared"

const Academics: FC = () => {
	return (
		<>
			<PageBanner>
				<PageBanner.Left>
					<Footnote title="Academics" />
					<Title>Nurturing Young Minds for Success</Title>
				</PageBanner.Left>

				<PageBanner.Right>
					<Description>
						Welcome to our Academics page, where we take pride in providing a
						comprehensive and stimulating educational experience for your child.
						Our kindergarten school's academic program is thoughtfully designed
						to foster a love for learning while building a strong foundation of
						essential skills and knowledge. From language arts and mathematics
						to science and social studies, our curriculum is carefully crafted
						to spark curiosity and encourage active exploration.
					</Description>
				</PageBanner.Right>
			</PageBanner>
		</>
	)
}

export default Academics
