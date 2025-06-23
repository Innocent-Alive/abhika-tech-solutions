import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Abhika Tech Solutions delivered a stunning website that exceeded our expectations. Their attention to detail and creative vision are unparalleled.",
    name: "John Doe",
    title: "CEO, Tech Innovators",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "The team was professional, responsive, and incredibly talented. They transformed our online presence and boosted our engagement significantly.",
    name: "Jane Smith",
    title: "Marketing Director, Creative Co.",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "Working with Abhika Tech was a breeze. They understood our needs perfectly and delivered a high-quality product on time and within budget.",
    name: "Sam Wilson",
    title: "Founder, Startup Hub",
    imageUrl: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-background p-8 rounded-xl shadow-md text-center h-[450px] flex flex-col justify-between border-2 border-transparent hover:border-tertiary transition-all duration-300 mb-2">
    <FaQuoteLeft className="text-secondary text-4xl mx-auto mb-4" />
    <p className="text-text italic mb-6 flex-grow">\"{testimonial.quote}\"</p>
    <div className="mt-auto">
      <img
        src={testimonial.imageUrl}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-secondary"
      />
      <h4 className="font-bold text-primary text-lg">{testimonial.name}</h4>
      <p className="text-sm text-text/80">{testimonial.title}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const swiperRef = useRef(null);
  return (
    <section id="testimonial" className="bg-background py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">
            What Our Clients Say
          </h2>
          <p className="text-secondary mt-2">
            Success Stories from Our Partners
          </p>
        </div>
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".testimonial-swiper-button-next",
              prevEl: ".testimonial-swiper-button-prev",
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-auto">
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            onClick={() => swiperRef.current?.slidePrev()}
            className="testimonial-swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 bg-primary/80 text-white rounded-full cursor-pointer hover:bg-secondary transition-colors duration-300 md:-left-8"
          >
            <FaArrowLeft size={24} />
          </div>
          <div
            onClick={() => swiperRef.current?.slideNext()}
            className="testimonial-swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 bg-primary/80 text-white rounded-full cursor-pointer hover:bg-secondary transition-colors duration-300 md:-right-8"
          >
            <FaArrowRight size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
