import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { testimonials } from "../data/testimonialsData";

function TestimonialsSection() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section id="testimonials" className="py-16 px-6 bg-white dark:bg-deepMint-800 text-deepMint-800 dark:text-deepMint-50">
      <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">Testimonials</h2>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div
              data-aos="zoom-in"
              className="bg-deepMint-100 dark:bg-deepMint-900 p-6 rounded-xl shadow-md h-full flex flex-col justify-between"
            >
              <div>
                <i className="bx bxs-quote-alt-left text-2xl text-deepMint-500 mb-4 block" />
                <p className="text-sm mb-4">{t.quote}</p>
              </div>
              <div className="mt-4">
                <h3 className="text-xs text-deepMint-400 mb-2">{t.date}</h3>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-deepMint-300" />
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <span className="text-xs text-deepMint-500">{t.title}</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default TestimonialsSection;
