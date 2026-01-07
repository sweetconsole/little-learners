import type { JSX, MouseEventHandler } from "react"

export interface CardProps {
	children: JSX.Element | JSX.Element[]
	className?: string
	shadow?: boolean
	onClick?: MouseEventHandler
}
