export type Statistic = {
	type: string
	value?: number
	title?: string
}

export const statistics: Array<Statistic> = [
	{
		value: 7000,
		title: "Students Passed Out",
		type: "value"
	},
	{
		type: "line"
	},
	{
		value: 37,
		title: "Awards & Recognitions",
		type: "value"
	},
	{
		type: "line"
	},
	{
		value: 15,
		title: "Experience Educators",
		type: "value"
	}
]
