'use client';
import styles from './SuitableFor.module.scss';
import SuitableBlock from './SuitableBlock';
import BlocksData from './blocks.json';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useScreenWidth } from '../../../hooks'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SuitableFor = () => {
    const blocks = BlocksData;
    const screenWidth = useScreenWidth();
    const dotsPagination = styles.dots_pagination;
    const bulletActive = styles.bullet_active;
    const bulletClass = styles.bullet;

    return (
        <div className={styles.root}>
            <div className='container'>
                <h3 className={styles.title}>Підходить для тих, хто:</h3>
                {screenWidth.mobile ?
                    (
                        <Swiper
                            className={styles.swiper}
                            modules={[Navigation, Pagination]}
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{
                                clickable: true,
                                el: `.${dotsPagination}`,
                                bulletActiveClass: `${bulletActive}`,
                                bulletClass: `${bulletClass}`,
                            }}
                        >
                            <SwiperSlide>
                                <div className={styles.wrapper}>
                                    <SuitableBlock {...blocks[0]} key={0} />
                                    <SuitableBlock {...blocks[1]} key={1} />
                                    <SuitableBlock {...blocks[2]} key={2} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.wrapper}>
                                    <SuitableBlock {...blocks[3]} key={3} />
                                    <SuitableBlock {...blocks[4]} key={4} />
                                    <SuitableBlock {...blocks[5]} key={5} />
                                </div>
                            </SwiperSlide>

                            <div className={`${dotsPagination}`}></div>
                        </Swiper>

                    ) :
                    (
                        <div className={styles.wrapper}>
                            {blocks?.map((block, index) => (
                                <SuitableBlock {...block} key={index} />
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default SuitableFor;