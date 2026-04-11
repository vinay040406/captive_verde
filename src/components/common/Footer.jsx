import Image from "next/image";
import Link from "next/link";
import {
  FOOTER_ANCHOR_TAG_DATA,
  FOOTER_DATA,
  FOOTER_SOCIAL_LINKS,
} from "../utils/helper";
import Icons from "./Icons";

const Footer = () => {
  return (
    <div className="w-full bg-blacky pt-10 md:pt-17.5 mt-16 md:mt-35 flex flex-col gap-5 sm:gap-10 md:gap-18.5">
      <div className="max-w-285 w-full mx-auto flex px-4 xl:px-0 ">
        <div className="flex flex-col gap-5 sm:gap-8 lg:gap-5.5 w-full">
          <div className="flex gap-4 md:gap-6 lg:gap-8 xl:gap-5.5 flex-col xl:flex-row w-full ">
            <div className="flex flex-col gap-6 max-w-full lg:max-w-129.25 w-full ">
              <Link href={"/about"}>
                <Image
                  src={"/images/webp/logo.svg"}
                  height={104}
                  width={168}
                  alt="logo"
                  className="object-cover object-center h-15 w-25 sm:w-42 sm:h-26 rounded-lg sm:rounded-xl"
                />
              </Link>
              <p className="leading-160 font-poppins text-whitee text-sm sm:text-base">
                Advancing eco-friendly living through green real estate,
                wellness ventures, and Indigenous partnerships. Building a
                future rooted in sustainability, culture, and innovation.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 xl:gap-12.5">
              {FOOTER_DATA.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-3 xl:gap-4 font-poppins text-whitee "
                >
                  <h3 className="font-semibold leading-100 text-base">
                    {item.title}
                  </h3>
                  <div className="flex flex-col gap-2 xl:gap-3">
                    {item.links.map((link, i) => (
                      <Link
                        href={"/"}
                        key={i}
                        className="leading-160 text-sm sm:text-base a"
                      >
                        {link}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex flex-col gap-4 font-poppins text-whitee col-span-2 md:col-span-1">
                <h4 className="font-semibold leading-100 text-base">Contact</h4>
                <div className="flex flex-col gap-3">
                  {FOOTER_ANCHOR_TAG_DATA.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-2 sm:gap-3 items-center "
                    >
                      <Icons
                        icon={item.svg}
                        className={"h-4 w-4 sm:h-5 sm:w-7"}
                      />
                      <a
                        className="leading-160 text-whitee font-poppins xl:whitespace-nowrap min-w-0 wrap-break-word whitespace-pre-wrap text-sm sm:text-base a"
                        href={`${item.svg === "location" ? "" : item.svg === "contact" ? "tel:+1 473824327" : item.svg === "email" ? "mailto:info@captivaverde.com" : ""}`}
                      >
                        {item.text}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 sm:gap-8 items-center text-whitee">
            <h5 className="text-xl leading-100 font-semibold">Follow us </h5>
            <div className="flex gap-2 sm:gap-4">
              {FOOTER_SOCIAL_LINKS.map((item, index) => (
                <a
                  aria-label={item.svg}
                  href={item.href}
                  key={index}
                  className="h-8 w-8 rounded-full flex justify-center items-center border border-whitee group duration-300 ease-in hover:bg-white hover:border-transparent"
                >
                  <Icons
                    icon={item.svg}
                    pathClass={"fill-whitee group-hover:fill-blacky"}
                    className={"h-3.5 w-3.5"}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-t-whitee py-5 flex justify-center items-center px-4 xl:px-0 text-center">
        <p className="text-whitee font-poppins leading-160 text-sm md:text-base">
          © {new Date().getFullYear()} Captiva Verde Wellness Corp. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
