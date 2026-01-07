import { type FC, useRef } from "react"
import { Swiper as SwiperType } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { Container } from "../../../shared"
import Testimonial from "../Testimonial/Testimonial.tsx"
import { type TestimonialType } from "../testimonials.data.ts"
import styles from "./TestimonialsSwiper.module.scss"
import SwitchSlideButton from "../SwitchSlideButton/SwitchSlideButton.tsx"

interface TestimonialsSwiperProps {
	testimonials: Array<TestimonialType>
}

const TestimonialsSwiper: FC<TestimonialsSwiperProps> = ({ testimonials }) => {
	const swiperRef = useRef<SwiperType>(null)

	return (
		<Container className={styles.testimonials}>
			<Swiper
				className={styles.swiper}
				loop={true}
				slidesPerView={1}
				spaceBetween={50}
				breakpoints={{
					576: {
						slidesPerView: 3,
						spaceBetween: 40
					},
					1440: {
						slidesPerView: 3,
						spaceBetween: 50
					}
				}}
				onBeforeInit={swiper => {
					swiperRef.current = swiper
				}}
			>
				{testimonials.map((testimonial, index) => (
					<SwiperSlide key={index}>
						<Testimonial {...testimonial} />
					</SwiperSlide>
				))}
			</Swiper>

			<SwitchSlideButton
				onClick={() => swiperRef.current?.slidePrev()}
				ariaLabel="Previous testimonial"
			/>

			<SwitchSlideButton
				onClick={() => swiperRef.current?.slideNext()}
				ariaLabel="Previous testimonial"
			/>
		</Container>
	)
}

export default TestimonialsSwiper
