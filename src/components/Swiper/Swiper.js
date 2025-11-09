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
                <div className="aspect-video w-full">
                    <iframe
                        className="yt-video"
                        src="https://www.youtube.com/embed/DWZ0Ls8JQaU?rel=0&modestbranding=1&playsinline=1"
                        title="Chopin - Andante Spianato and Grande Polonaise Brillante, Op. 22"
                        frameBorder="0"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                    />
                </div>

                <p className="video-text">
                    Chopin - Andante Spianato and Grande Polonaise Brillante in E flat major Op. 22
                </p>
            </SwiperSlide><SwiperSlide>
                <div className="aspect-video w-full">
                    <iframe
                        className="yt-video"
                        src="https://www.youtube.com/embed/DWZ0Ls8JQaU?rel=0&modestbranding=1&playsinline=1"
                        title="Chopin - Andante Spianato and Grande Polonaise Brillante, Op. 22"
                        frameBorder="0"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                    />
                </div>

                <p className="video-text">
                    Chopin - Andante Spianato and Grande Polonaise Brillante in E flat major Op. 22
                </p>
            </SwiperSlide>
            <SwiperSlide>
                <iframe className='yt-video' src="https://www.youtube.com/embed/0cGek8uQjXo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p className='video-text'>Chopin - Scherzo in C sharp minor Op. 39</p>
            </SwiperSlide>
            <SwiperSlide>
                <iframe className='yt-video' src="https://www.youtube.com/embed/OZxePyoeCQ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p className='video-text'>Chopin - Etude in F major Op. 10 No. 8</p>
            </SwiperSlide>

            <SwiperSlide>
                <iframe className='yt-video' src="https://www.youtube.com/embed/Df6HL3Sibjs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p className='video-text'>Chopin - Nocturne in C minor Op. 48 No. 1</p>
            </SwiperSlide>
            <SwiperSlide>
                <iframe className='yt-video' src="https://www.youtube.com/embed/ME_CCzzyQFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p className='video-text'>Saturday Chopin Recitals in Żelazowa Wola</p>
            </SwiperSlide>

            <SwiperSlide>
                <iframe className='yt-video' src="https://www.youtube.com/embed/orf7l6EXics?si=mG445-NTe0opA2RS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p className='video-text'>Szymanowski - Don Juan Serenade from Masques op. 34</p>
            </SwiperSlide>
            <SwiperSlide>
                <iframe className='yt-video' src="https://www.youtube.com/embed/G4D7UJywdP0?si=3o8RnceNB9l739p0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p className='video-text'>Szymanowski - Tantris the Clown from Masques op. 34</p>
            </SwiperSlide>








            ...
        </Swiper>
    );
};

export default SwiperComponent;
