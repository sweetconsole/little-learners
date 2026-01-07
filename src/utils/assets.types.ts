type Source = {
	srcSet: string
	media: string
}

export type PictureAssets = {
	attributes: {
		src: string
		alt?: string
	}
	sources: Array<Source>
}
