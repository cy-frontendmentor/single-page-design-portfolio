import Image from "next/image";
import avatar from "../../public/assets/image-amy.webp";
import Link from "next/link";
const SelfIntroduction = () => {
  return (
    <section className="mx-auto flex w-full max-w-[1110px] flex-col items-center justify-center space-y-10 text-center  md:flex-row md:space-y-0 lg:space-x-[125px]">
      <Image
        src={avatar}
        alt=""
        width={445}
        height={445}
        className=" max-w-[364px] md:-translate-x-[69px] lg:max-w-[445px] lg:-translate-x-0"
      ></Image>
      <div className="grid justify-items-center gap-y-6 md:justify-items-start md:text-left">
        <h2 className=" md:heading-s lg:heading-m text-[26px] font-bold leading-normal text-black">
          I’m Amy, and I’d love to work on your next project
        </h2>
        <p className="text-base font-medium leading-[26px] md:text-lg">
          I love working with others to create beautiful design solutions. I’ve
          designed everything from brand illustrations to complete mobile apps.
          I’m also handy with a camera!
        </p>
        <Link
          href="#"
          className=" w-fit rounded-[28px] bg-red-light py-2 px-[27px] text-sm font-bold leading-[28px] text-cream-light hover:bg-yellow-summer"
        >
          Free Consultation
        </Link>
      </div>
    </section>
  );
};

export default SelfIntroduction;
