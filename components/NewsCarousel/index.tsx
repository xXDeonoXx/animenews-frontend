import React from 'react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Article } from '../../types/article';
import ColumnLikeCard from '../ColumnLikeCard';

interface NewsCarouselProps {
  articles: Article[];
}

const NewsCarousel = ({ articles }: NewsCarouselProps) => {
  return (
    <div className="h-full w-1/2 flex">
      <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="flex h-full w-full"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination
        loop
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        effect={'fade'}
      >
        {articles.map((article) => {
          return (
            <SwiperSlide>
              <ColumnLikeCard article={article} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default NewsCarousel;
