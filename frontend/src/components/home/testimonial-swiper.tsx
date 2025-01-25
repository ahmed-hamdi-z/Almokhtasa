
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useTranslation } from "react-i18next";

interface Testimonial {
  id: number;
  name: string;
  info: string;
}

interface TestimonialSwiperProps {
  testimonials: Testimonial[];
}

const TestimonialSwiper: React.FC<TestimonialSwiperProps> = ({ testimonials }) => {

    const { t } = useTranslation();
  return (
    <section className="my-5">
         <h2 className="text-4xl font-bold text-center my-12 text-[#505050]">{t("What our customers say")}</h2>
      <div className=" ">
        <Swiper 
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-stuff-text  shadow-md rounded-lg w-full h-40 flex flex-col items-center justify-center ">
                <h3 className="text-xl font-semibold text-center py-2 text-footer ">{testimonial.name}</h3>
                <p className="text-sm font-thin leading-relaxed text-white text-center px-1">{testimonial.info}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSwiper;
