import type { JSX, MouseEventHandler } from "react"
import type { PictureAssets } from "../../../utils/assets.types.ts"

export interface CardProps {
	children: JSX.Element | JSX.Element[]
	className?: string
	shadow?: boolean
	onClick?: MouseEventHandler
}

export interface CardListItemProps extends CardProps {
	icon?: PictureAssets
}
