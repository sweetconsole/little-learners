type ImageAttribute = {
	src: string
	alt?: string
}

type Source = {
	srcSet: string
	media: string
}

export type PictureAssets = {
	attributes: ImageAttribute
	sources: Array<Source>
}
