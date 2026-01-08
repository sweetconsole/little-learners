import { type FC, type ReactNode } from "react"
import { motion } from "framer-motion"
import { Header, Footer, Banner } from "../widgets"

interface Props {
	children: ReactNode
}

const PageLayout: FC<Props> = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{
				duration: 0.4,
				ease: "easeInOut"
			}}
		>
			<Banner />
			<Header />

			{children}

			<Footer />
		</motion.div>
	)
}

export default PageLayout
