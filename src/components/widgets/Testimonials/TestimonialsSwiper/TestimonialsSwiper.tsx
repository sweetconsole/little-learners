import { type FC, useRef } from "react"
import { Swiper as SwiperType } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { Picture, Container } from "../../../shared"
import Testimonial from "../Testimonial/Testimonial.tsx"
import { Arrow, type TestimonialType } from "../testimonials.data.ts"
import styles from "./TestimonialsSwiper.module.scss"

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

			<button
				className={styles.swipe_button}
				aria-label="Previous testimonial"
				onClick={() => swiperRef.current?.slidePrev()}
			>
				<div className={styles.swipe_button_arrow}>
					<Picture assets={Arrow} />
				</div>
			</button>

			<button
				className={styles.swipe_button}
				aria-label="Next testimonial"
				onClick={() => swiperRef.current?.slideNext()}
			>
				<div className={styles.swipe_button_arrow}>
					<Picture assets={Arrow} />
				</div>
			</button>
		</Container>
	)
}

export default TestimonialsSwiper
