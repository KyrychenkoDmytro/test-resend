'use client';
import styles from './Testimonials.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useScreenWidth } from '../../hooks';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NextButtonSlider, PrevButtonSlider } from '../svgs';

const Testimonials = () => {
    const nextBtn = styles.button_next_slide;
    const prevBtn = styles.button_prev_slide;
    const disabledBtn = styles.button_disabled;
    const dotsPagination = styles.dots_pagination;
    const bulletActive = styles.bullet_active;
    const bulletClass = styles.bullet;

    const screenWidth = useScreenWidth();

    return (
        <div className={styles.root} id='testimonials'>
            <div className="container">
                <div className={styles.title}>Відгуки</div>
                {screenWidth.desktop ?
                    (
                        <div className={styles.wrapper}>
                            <div className={`${styles.item1} ${styles.item}`}></div>
                            <div className={`${styles.item2} ${styles.item}`}></div>
                            <div className={`${styles.item3} ${styles.item}`}></div>
                        </div>
                    ) :
                    (
                        <Swiper
                            className={styles.swiper}
                            modules={[Navigation, Pagination]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation={{
                                nextEl: `.${nextBtn}`,
                                prevEl: `.${prevBtn}`,
                                disabledClass: `.${disabledBtn}`,
                            }}
                            pagination={{
                                clickable: true,
                                el: `.${dotsPagination}`,
                                bulletActiveClass: `${bulletActive}`,
                                bulletClass: `${bulletClass}`,
                            }}
                            breakpoints={{
                                360: {
                                    slidesPerView: 1,
                                },
                                1200: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                            }}

                        >
                            <SwiperSlide><div className={`${styles.item1} ${styles.item}`}></div></SwiperSlide>
                            <SwiperSlide><div className={`${styles.item2} ${styles.item}`}></div></SwiperSlide>
                            <SwiperSlide><div className={`${styles.item3} ${styles.item}`}></div></SwiperSlide>

                            <button className={`${prevBtn} ${disabledBtn}`}>
                                <PrevButtonSlider />
                            </button>
                            <button className={`${nextBtn} ${disabledBtn}`}>
                                <NextButtonSlider />
                            </button>
                            <div className={`${dotsPagination}`}></div>
                        </Swiper>
                    )
                }
            </div>
        </div>
    );
}

export default Testimonials;