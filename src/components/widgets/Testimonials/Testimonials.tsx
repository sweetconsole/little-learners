import { type FC } from "react"
import { useQuery } from "@tanstack/react-query"
import { Section, Footnote, Title, Subtitle } from "../../shared"
import { supabase } from "../../../utils/supabase.ts"
import { shuffledArray } from "../../../utils/shuffledArray.method.ts"
import TestimonialsSwiper from "./TestimonialsSwiper/TestimonialsSwiper.tsx"
import { testimonials } from "./testimonials.data.ts"

const Testimonials: FC = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ["reviews"],
		queryFn: async () => {
			const query = supabase
				.from("reviews")
				.select("*")
				.gt("stars", 3)
				.limit(21)

			const { data, error } = await query

			if (error) throw new Error(error.message)

			data.forEach((testimonial, index) => {
				if (testimonial.name.length < 4) data.splice(index)
				if (testimonial.text.length < 110) data.splice(index)
			})

			return data
		}
	})

	return (
		<Section id="testimonials">
			<Footnote title="Their Happy Words 🤗" />
			<Title>Our Testimonials</Title>
			<Subtitle>
				Our testimonials are heartfelt reflections of the nurturing environment
				we provide, where children flourish both academically and emotionally.
			</Subtitle>

			<TestimonialsSwiper
				testimonials={
					error || !data || isLoading ? testimonials : shuffledArray(data)
				}
			/>
		</Section>
	)
}

export default Testimonials
