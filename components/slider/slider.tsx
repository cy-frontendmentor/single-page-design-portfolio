"use client";
import image01 from "../../public/assets/image-slide-1.jpg";
import image02 from "../../public/assets/image-slide-2.jpg";
import image03 from "../../public/assets/image-slide-3.jpg";
import image04 from "../../public/assets/image-slide-4.jpg";
import image05 from "../../public/assets/image-slide-5.jpg";
import arrowLeft from "../../public/assets/icon-arrow-left.svg";
import arrowRight from "../../public/assets/icon-arrow-right.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

const IMAGES = [
  { id: 1, url: "/assets/image-slide-1.jpg", transition: "translate-x-[0]" },
  {
    id: 2,
    url: "/assets/image-slide-2.jpg",
    transition: "translate-x-[calc(100%+30px)]",
  },
  {
    id: 3,
    url: "/assets/image-slide-3.jpg",
    transition: "translate-x-[calc(200%+60px)]",
  },
  {
    id: 4,
    url: "/assets/image-slide-4.jpg",
    transition: "translate-x-[calc(300%+90px)]",
  },
  {
    id: 5,
    url: "/assets/image-slide-5.jpg",
    transition: "translate-x-[calc(400%+120px)]",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [images, setImages] = useState(IMAGES);
  const slideLeftController = () => {
    setCurrentSlide((currentSlide) => currentSlide - 1);
  };
  const slideRightController = () => {
    setCurrentSlide((currentSlide) => currentSlide + 1);
  };

  useEffect(() => {
    setImages(
      IMAGES.map((image, i) => {
        return {
          ...image,
          transition: `translate-x-[calc(${100 * (i - currentSlide)}%+${
            30 * (i - currentSlide)
          }px)]`,
        };
      })
    );
  }, [currentSlide]);

  return (
    <div className=" grid w-full justify-items-center gap-y-8 text-center">
      <p className=" text-2xl font-bold text-black">My Work</p>
      <div className="relative h-[180px] w-full overflow-hidden">
        {images.map((image) => (
          <div key={image.id} className="absolute transition-all">
            <div
              className={`relative h-[180px] w-[270px] overflow-hidden rounded-[10px] ${image.transition}`}
            >
              <Image src={image.url} alt="" fill></Image>
            </div>
          </div>
        ))}
      </div>
      <div className="flex space-x-4">
        <button
          className="flex h-16 w-16 items-center justify-center rounded-full bg-black hover:bg-blue-galactic"
          onClick={slideLeftController}
        >
          <Image src={arrowLeft} alt="" width={15} height={16} />
        </button>
        <button
          className="flex h-16 w-16 items-center justify-center rounded-full bg-black hover:bg-blue-galactic"
          onClick={slideRightController}
        >
          <Image src={arrowRight} alt="" width={15} height={16} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
