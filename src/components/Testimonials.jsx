import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
    return (
        <section className="testimonials" id="testimonials">
            <div className="container text-center">
                <i className="fa fa-4x fa-quote-left mb-4"></i>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop={true}
                    slidesPerView={1}
                >
                    <SwiperSlide>
                        <div className="testimonial-item">
                            <img
                                src="/img/testimonial-1.jpg"
                                className="testimonial-img"
                                alt="Fahad Saud"
                            />
                            <h3>Fahad Al Saud</h3>
                            <h4>CEO, Riyadh Logistics</h4>
                            <p>
                                Our website speed improved dramatically and conversions increased
                                by 38%. The process was smooth, professional, and delivered exactly
                                what we needed.
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="testimonial-item">
                            <img
                                src="/img/testimonial-2.jpg"
                                className="testimonial-img"
                                alt="Abdullah Al Harbi"
                            />
                            <h3>Abdullah Al Harbi</h3>
                            <h4>Founder, Najd Digital Solutions</h4>
                            <p>
                                The custom web app saved us hours of manual work every week. Clean
                                architecture, fast performance, and very reliable delivery.
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="testimonial-item">
                            <img
                                src="/img/testimonial-3.jpg"
                                className="testimonial-img"
                                alt="Mohammed Qahtani"
                            />
                            <h3>Mohammed Al Qahtani</h3>
                            <h4>Operations Manager, Jeddah Retail Group</h4>
                            <p>
                                Our mobile app launched on time and exceeded expectations. User
                                experience is excellent, and customer engagement increased
                                immediately.
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}