import { type FC } from "react"
import clsx from "clsx"
import type { ContainerProps } from "./container.interface.ts"
import styles from "./Container.module.scss"

const ContainerList: FC<ContainerProps> = ({ children, className }) => {
	return <ul className={clsx(className, styles.container)}>{children}</ul>
}

export default ContainerList
