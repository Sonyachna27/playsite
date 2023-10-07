import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Virtual } from 'swiper/modules';
import { layoutImg, swiperImg } from '../../const';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/virtual';
const AboutSwiper = () => {
  return (
  //  <div className='swiper__wrap'>
<Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, Virtual]}
    spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      className="AbSwiper"
      pagination={{
          type: 'fraction',
			clickable: true,
      renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
              ' of ' +
              '<span class="' + totalClass + '"></span>';
  }
        }}
    >
    {swiperImg.map((slide)=> (
        <SwiperSlide key={slide.imageTitle}>
        <img className='slider__about-img' src={slide.imgUrl} alt="images" />
      </SwiperSlide>
    ))}
    </Swiper>
  //  </div>
   
  );
};

export default AboutSwiper;