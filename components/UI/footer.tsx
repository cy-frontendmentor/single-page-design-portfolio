import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo.svg";
const Footer = () => {
  return (
    <footer className="mx-[15px] mb-8 grid gap-y-10 text-center md:mx-[39px] md:mb-14">
      <div className="grid justify-items-center gap-y-6 rounded-[10px] bg-black px-6 py-[49px] md:px-[75px] md:pt-[56px] md:pb-[64px] lg:grid-cols-2 lg:items-center lg:justify-items-end lg:py-20 lg:pl-[65px] lg:pr-[95px] lg:text-left">
        <div className="grid gap-y-6">
          <h2 className="text-[26px] font-bold text-cream-light md:text-[32px] lg:text-[40px]">
            Book a call with me
          </h2>
          <p className="text-base font-medium leading-[26px] text-cream-light md:text-lg md:leading-7">
            I’d love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there. Free Consultation Free
            Consultation
          </p>
        </div>
        <Link
          href="#"
          className=" w-fit rounded-[28px] bg-red-light py-2 px-[27px] text-sm font-bold leading-[28px] text-cream-light hover:bg-yellow-summer"
        >
          Free Consultation
        </Link>
      </div>
      <nav className="flex items-center justify-between">
        <Image src={logo} alt="" width={48} height={48}></Image>
        <Link
          href="#"
          className=" rounded-[28px] bg-black py-2 px-[27px] text-sm font-bold leading-[28px] text-cream-light hover:bg-blue-galactic"
        >
          Free Consultation
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
