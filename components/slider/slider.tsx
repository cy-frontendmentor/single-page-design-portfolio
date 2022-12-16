import image01 from "../../public/assets/image-slide-1.jpg";
import image02 from "../../public/assets/image-slide-2.jpg";
import image03 from "../../public/assets/image-slide-3.jpg";
import image04 from "../../public/assets/image-slide-4.jpg";
import image05 from "../../public/assets/image-slide-5.jpg";
import Image from "next/image";

const Slider = () => {
  return (
    <div className="w-full overflow-auto text-center">
      <p className=" text-2xl font-bold text-black">My Work</p>
      <div className=" flex space-x-[30px]">
        <div className="relative h-[180px] w-[270px] overflow-hidden rounded-[10px] ">
          <Image src={image01} alt="" fill></Image>
        </div>
        <div className="relative h-[180px] w-[270px] overflow-hidden rounded-[10px]">
          <Image src={image02} alt="" fill></Image>
        </div>
        <div className="relative h-[180px] w-[270px] overflow-hidden rounded-[10px]">
          <Image src={image03} alt="" fill></Image>
        </div>
        <div className="relative h-[180px] w-[270px] overflow-hidden rounded-[10px]">
          <Image src={image04} alt="" fill></Image>
        </div>
        <div className="relative h-[180px] w-[270px] overflow-hidden rounded-[10px]">
          <Image src={image05} alt="" fill></Image>
        </div>
      </div>
    </div>
  );
};

export default Slider;
