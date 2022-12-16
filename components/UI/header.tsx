import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo.svg";
import pattern_graphic_design from "../../public/assets/pattern-graphic-design.svg";
import pattern_ui_ux from "../../public/assets/pattern-ui-ux.svg";
import pattern_apps from "../../public/assets/pattern-apps.svg";
import pattern_illustrations from "../../public/assets/pattern-illustrations.svg";
import pattern_photography from "../../public/assets/pattern-photography.svg";
import pattern_motion_graphics from "../../public/assets/pattern-motion-graphics.svg";

const Header = () => {
  return (
    <div className="grid max-w-[1110px] ">
      <header className=" grid gap-y-8">
        <nav className="flex items-center justify-between">
          <Image src={logo} alt="" width={48} height={48}></Image>
          <Link
            href="#"
            className=" rounded-[28px] bg-black py-2 px-[27px] text-sm font-bold leading-[28px] text-cream-light hover:bg-blue-galactic"
          >
            Free Consultation
          </Link>
        </nav>
        <div className="grid justify-center gap-y-4 text-center md:gap-y-[27px]">
          <h1 className="lg:heading-l text-4xl font-bold text-black md:text-[44px]">
            Design solutions made easy
          </h1>
          <p className=" mx-auto max-w-[573px] text-base font-medium leading-[26px] md:text-lg">
            With over ten years of experience in various design disciplines, I’m
            your one-stop shop for your design needs.
          </p>
        </div>
        <section className="roy-grid grid-flow-row-dense justify-items-stretch gap-y-4 gap-x-[25px] lg:gap-y-0 ">
          <div className="relative row-span-2 h-[364px] rounded-lg bg-blue-galactic">
            <p className="absolute bottom-6 left-6 text-2xl font-bold text-white">
              Graphic Design
            </p>
            <Image
              src={pattern_graphic_design}
              alt=""
              width={128}
              height={192}
              className="absolute top-6 right-6"
            ></Image>
          </div>
          <div className="grid h-[182px] grid-cols-2 gap-x-[24px]  ">
            <div className=" relative rounded-lg bg-yellow-summer">
              <p className="absolute bottom-6 left-6 text-2xl font-bold text-white">
                UI/UX
              </p>
              <Image
                src={pattern_ui_ux}
                alt=""
                width={64}
                height={64}
                className="absolute top-6 right-6"
              ></Image>
            </div>
            <div className=" relative rounded-lg bg-pink">
              <p className="absolute bottom-6 left-6 text-2xl font-bold text-white">
                Apps
              </p>
              <Image
                src={pattern_apps}
                alt=""
                width={64}
                height={64}
                className="absolute top-6 right-6"
              ></Image>
            </div>
          </div>
          <div className=" relative h-[158px] rounded-lg bg-red-light  lg:order-4">
            <p className="absolute bottom-6 left-6 order-5 text-2xl font-bold text-white">
              Illustrations
            </p>
            <Image
              src={pattern_illustrations}
              alt=""
              width={128}
              height={64}
              className="absolute top-6 right-6"
            ></Image>
          </div>
          <div className=" relative h-[182px] rounded-lg bg-cyan lg:order-3">
            <p className="absolute bottom-6 left-6 text-2xl font-bold text-white">
              Photography
            </p>
            <Image
              src={pattern_photography}
              alt=""
              width={160}
              height={64}
              className="absolute top-6 right-6"
            ></Image>
          </div>
          <div className=" relative h-[182px] rounded-lg bg-dark-purple lg:order-5  lg:h-[158px]">
            <p className="absolute bottom-6 left-6 text-2xl font-bold text-white">
              Motion Graphics
            </p>
            <Image
              src={pattern_motion_graphics}
              alt=""
              width={128}
              height={64}
              className="absolute top-6 right-6"
            ></Image>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Header;
