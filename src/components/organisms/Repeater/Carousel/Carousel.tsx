import React, { useRef, useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import arrow from "../../../../../public/icons/pagination-active.svg";
import blackArrow from "../../../../../public/icons/pagination-active-black.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Tiles from "../../Tiles/Tiles";
import CarouselItem from "@/components/molecules/CarouselItem/CarouselItem";
import { Pagination } from "swiper/modules";

import {
  CommonItemProps,
  CollectionItemProps,
  SalesTilesItem,
  GeneralTilesItem,
} from "@/types/TileItemProps";

interface CarouselProps {
  carouselType: string;
  commonsCollections: Array<CommonItemProps | CollectionItemProps>;
  salesTiles: Array<SalesTilesItem>;
  generalTiles: Array<GeneralTilesItem>;
  title?: string;
  largeCarousel?: boolean;
  lightBackground?: boolean;
}

type TilesProps =
  | CommonItemProps
  | CollectionItemProps
  | SalesTilesItem
  | GeneralTilesItem;

const Carousel: React.FC<CarouselProps> = ({
  carouselType,
  commonsCollections,
  salesTiles,
  generalTiles,
  title,
  largeCarousel,
  lightBackground,
}) => {
  let carouselItems: Array<TilesProps>;
  carouselType = carouselType.replace(/\s/g, "");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const swiperRefs = useRef<SwiperCore | null>(null);
  const [hoverPrevArrow, setHoverPrevArrow] = useState(arrow);
  const [hoverNextArrow, setHoverNextArrow] = useState(arrow);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const carouselSettings = {
    breakpoints: {
      300: {
        slidesPerView: 1.1,
        spaceBetween: 14,
      },
      500: {
        slidesPerView: largeCarousel ? 1.3 : 1.4,
        spaceBetween: 32,
      },
      650: {
        slidesPerView: largeCarousel ? 1.3 : 1.6,
        spaceBetween: 32,
      },
      768: {
        slidesPerView: largeCarousel ? 1.4 : 1.9,
        spaceBetween: 32,
      },
      900: {
        slidesPerView: largeCarousel ? 1.5 : 2.3,
        spaceBetween: 32,
      },
      1100:{
        slidesPerView: largeCarousel ? 2 : 2.5,
        spaceBetween: 32,
      },
      1200: {
        slidesPerView: largeCarousel ? 2 : 3,
        spaceBetween: 32,
      },
      1440: {
        slidesPerView: largeCarousel ? 2.2 : 3.3,
        spaceBetween: 32,
      },
      1640: {
        slidesPerView: largeCarousel ? 2.4 : 3.5,
        spaceBetween: 32,
      },
      1800: {
        slidesPerView: largeCarousel ? 3 : 4,
        spaceBetween: 32,
      },
      1920: {
        slidesPerView: "auto" as "auto",
        spaceBetween: 32,
      },
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    watchSlidesProgress: true,
  };
  const paginationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateVisibleSlides = () => {
      const width = window.innerWidth;
    if (width >= 1800) {
        setVisibleSlides(largeCarousel ? 3 : 4);
      } else if (width >= 1640) {
        setVisibleSlides(largeCarousel ? 2.4 : 3.4);
      } else if (width >= 1440) {
        setVisibleSlides(largeCarousel ? 2.3 : 3.2);
      } else if (width >= 1200) {
        setVisibleSlides(largeCarousel ? 2 : 3);
      } else if (width >= 1100) {
        setVisibleSlides(largeCarousel ? 2 : 2.5);
      } else if (width >= 900) {
        setVisibleSlides(largeCarousel ? 1.5 : 2.3);
      } else if (width >= 768) {
        setVisibleSlides(largeCarousel ? 1.2 : 2); 
      } else if (width >= 650) {
        setVisibleSlides(largeCarousel ? 1.3 : 1.6); 
      } else if (width >= 500) {
        setVisibleSlides(largeCarousel ? 1.3 : 1.7);
      } else if (width >= 300) {
        setVisibleSlides(1.1);
      } else {
        setVisibleSlides(1.1);
      }
    };
  
    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);
  
    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, [largeCarousel]); 

  const handleNextClick = () => {
    if (swiperRefs.current) {
      swiperRefs.current.slideNext();
    }
  };

  const handlePrevClick = () => {
    if (swiperRefs.current) {
      swiperRefs.current.slidePrev();
    }
  };

  switch (carouselType) {
    case "CommonandCollection":
      carouselItems = commonsCollections;
      break;
    case "Sales":
      carouselItems = salesTiles;
      break;
    case "General":
      carouselItems = generalTiles;
      break;
    default:
      carouselItems = [];
  }


  const shouldRenderArrows = () => {
    if (!isMobile && carouselItems.length > 2 && largeCarousel) {
      return true;
    } else if (!isMobile && carouselItems.length <= 3) {
      return false;
    } else if (isMobile && carouselItems.length < 2) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div
      className={`${styles.carousel} ${styles[carouselType]} ${
        lightBackground ? styles.whiteBg : ""
      }`}
    >
      <div className={styles.container}>
        {title && <h4 className={styles.title}>{title}</h4>}
        <Swiper
          {...carouselSettings}
          modules={[Pagination]}
          pagination={{
            el: paginationRef.current,
            type: "bullets",
            bulletClass: `${styles.carouselBtn}`,
            bulletActiveClass: `${styles.active}`,
            clickable: true,
          }}
          onSwiper={(swiper) => (swiperRefs.current = swiper)}
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.activeIndex);
          }}
        >
          {carouselItems.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                {index === Math.floor(currentIndex + visibleSlides) && (
                  <div className={styles.overlay}></div>
                )}
                {carouselType === "CommonandCollection" && (
                  <Tiles
                    data={item as CommonItemProps | CollectionItemProps}
                    type={"carousel"}
                    largeCarousel={largeCarousel}
                  />
                )}
                {(carouselType === "Sales" || carouselType === "General") && (
                    <CarouselItem
                      type={carouselType}
                      data={item as SalesTilesItem | GeneralTilesItem}
                      index={index}
                      currentIndex={currentIndex}
                      visibleSlides={visibleSlides}
                    />
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
        {shouldRenderArrows() && (
          <div className={styles.buttonsContainer}>
            <div ref={paginationRef} className={styles.pips}></div>

            <div className={styles.arrows}>
              <Image
                className={styles.prev}
                src={hoverPrevArrow}
                alt="arrow-prev"
                onClick={handlePrevClick}
                onMouseOver={() => setHoverPrevArrow(blackArrow)}
                onMouseOut={() => setHoverPrevArrow(arrow)}
              />
              <Image
                className={styles.next}
                src={hoverNextArrow}
                alt="arrow-next"
                onClick={handleNextClick}
                onMouseOver={() => setHoverNextArrow(blackArrow)}
                onMouseOut={() => setHoverNextArrow(arrow)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
