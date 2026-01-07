import { type FC } from "react"
import clsx from "clsx"
import type { ContainerProps } from "./container.interface.ts"
import styles from "./Container.module.scss"

const Container: FC<ContainerProps> = ({ children, className }) => {
	return <div className={clsx(className, styles.container)}>{children}</div>
}

export default Container
