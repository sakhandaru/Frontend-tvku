import React from 'react';
import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
    const swiper = useSwiper();

    return (
    <div className='flex gap-5'>
        <div className='flex gap-5'>
            <button onClick={() => swiper.slidePrev()}>Prev</button>
            <button onClick={() => swiper.slideNext()}>Next</button>
        </div>
    </div>
    );
};