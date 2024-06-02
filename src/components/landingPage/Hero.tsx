import Link from "next/link";
import { Avatar } from "../hexta-ui/Avatar";
import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <div className="left-1/2 -translate-x-1/2 hero-glow  fading-out-2 absolute top-0 z-[1]"></div>
      <section
        className="flex items-center justify-between max-xl:justify-center max-xl:text-center pt-[13rem] pb-[20rem] px-[7rem] relative max-w-full max-xl:px-[1rem] overflow-hidden backdrop-blur-[6rem] z-[999]"
        style={{
          perspective: "1000px",
        }}
      >
        <div className="flex flex-col items-start max-xl:justify-center max-xl:items-center justify-left gap-4 text-left max-xl:text-center px-4">
          {" "}
          <div>
            <div className="flex -space-x-3 max-xl:justify-center">
              <Avatar
                avatarUrl="https://via.placeholder.com/40"
                className="ring-4 ring-black"
                size={40}
              />
              <Avatar
                avatarUrl="https://via.placeholder.com/40"
                className="ring-4 ring-black"
                size={40}
              />
              <Avatar
                avatarUrl="https://via.placeholder.com/40"
                className="ring-4 ring-black"
                size={40}
              />
              <Avatar
                avatarUrl="https://via.placeholder.com/40"
                className="ring-4 ring-black"
                size={40}
              />
            </div>
            <div>
              <small>Join 160+ users and create amazing landing page.</small>
            </div>
          </div>
          <h1 className="text-6xl font-bold tracking-tight max-xl:max-w-[60rem]  max-w-[40rem]  max-[372px]:text-5xl relative hero-heading">
            Modern & Stunning Website Templates and Examples
          </h1>
          <p className="text-md opacity-80 max-w-[30rem] w-full relative">
            Copy and paste our components in your next project to save ton of
            time and efforts for building a perfect a website.
          </p>
          <div className="flex flex-wrap gap-3 p-2 items-start justify-start z-[99]">
            <Link
              href="/docs/components/layout/Accordion"
              className="primary-button "
            >
              Browse Components
            </Link>
            <Link
              href="https://pro.ui.hextastudio.in"
              className="secondary-button "
            >
              Pricing
            </Link>
          </div>
        </div>
        <div className="features absolute right-[7rem] -top-3 fading-out-2 -skew-x-[5deg] overflow-hiddens flex items-center justify-center max-[1532px]:right-[2rem]">
          <div className="max-w-[45rem] max-h-[50rem] max-[1462px]:max-w-[40rem]  max-[1362px]:max-w-[35rem] max-xl:hidden features-div overflow-hidden">
            <div className="flex flex-col ">
              <Image
                src="/hero-image.webp"
                width={3738340}
                height={792450}
                alt="component preview"
                loading="eager"
                quality={100}
                className="max-w-full  w-full h-auto object-cover animate-heroScroller "
              />
              <Image
                src="/hero-image.webp"
                width={3738340}
                height={792450}
                alt="component preview"
                loading="eager"
                quality={100}
                className="max-w-full  w-full h-auto object-cover animate-heroScroller "
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
