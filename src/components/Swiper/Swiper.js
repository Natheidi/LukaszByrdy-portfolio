import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './swiper.css';
import 'swiper/css/navigation';

const SwiperComponent = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, A11y]}
            spaceBetween={150}
            slidesPerView={1}
            navigation
            loop
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >

            
            <SwiperSlide>
                <iframe className='yt-video' src="https://www.youtube.com/embed/orf7l6EXics?si=mG445-NTe0opA2RS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p className='video-text'>Szymanowski - Don Juan Serenade from Masques op.34</p>
            </SwiperSlide>
            <SwiperSlide>
                <iframe className='yt-video' src="https://www.youtube.com/embed/G4D7UJywdP0?si=3o8RnceNB9l739p0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p className='video-text'>Szymanowski - Tantris the Clown from Masques op.34</p>
            </SwiperSlide>
            <SwiperSlide>
                <iframe className='yt-video' src="https://www.youtube.com/embed/3ZPMISEIEGg?si=qGU7CRirStvjad5i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p className='video-text'>Mussorgsky - Pictures at an Exhibition</p>
            </SwiperSlide>
            ...
        </Swiper>
    );
};

export default SwiperComponent;
