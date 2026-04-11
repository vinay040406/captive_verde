"use client";
import React, { useEffect, useState } from "react";
import { HEADER_SOCIAL_LINKS, NAV_LINKS } from "../utils/helper";
import Icons from "./Icons";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { motion } from "motion/react";

const Navbar = () => {
  const [hamburgerState, setHamburgerState] = useState(false);
  useEffect(() => {
    document.body.style.overflow = hamburgerState ? "hidden" : "auto";
  });

  const handleHamburgerState = () => {
    setHamburgerState(!hamburgerState);
  };
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <div className="w-full font-poppins sticky top-0 z-50">
      <div className="w-full bg-dark-green py-2">
        <header className="max-w-285 w-full mx-auto flex lg:gap-65.25 text-whitee justify-between lg:justify-end items-center px-4">
          <p className="text-xs leading-160 hidden sm:block">
            Empowering Wellness & Sustainability Through Indigenous Partnerships
          </p>
          <div className="flex gap-3">
            {HEADER_SOCIAL_LINKS.map((item, index) => (
              <Link href={item.href} key={index}>
                <span className="border-[0.75px] border-whitee rounded-full h-6 w-6 bg-white flex justify-center items-center cursor-pointer group duration-300 ease-in hover:bg-dark-green">
                  <Icons
                    icon={item.svg}
                    pathClass={"group-hover:fill-whitee"}
                  />
                </span>
              </Link>
            ))}
          </div>
        </header>
      </div>

      <div className="w-full bg-white shadow-sm">
        <nav className="max-w-285 py-2.25 w-full justify-between mx-auto flex items-center px-4">
          <Link href={"/about"} onClick={() => setHamburgerState(false)}>
            <Image
              src={"/images/webp/logo.webp"}
              width={101}
              height={61}
              alt="logo"
            />
          </Link>

          <motion.ul className={`hidden md:flex gap-4 lg:gap-8 items-center `}>
            {NAV_LINKS.map((item, index) => (
              <Link key={index} href={item.href}>
                <motion.li className="leading-160 text-blacky li">
                  {item.title}
                </motion.li>
              </Link>
            ))}
            <Button
              text={"Contact"}
              variant={"primary"}
              className={"lg:ml-39.5"}
            />
          </motion.ul>

          {hamburgerState ? (
            <RxCross2
              onClick={handleHamburgerState}
              className="text-xl block md:hidden"
            />
          ) : (
            <GiHamburgerMenu
              onClick={handleHamburgerState}
              className="text-xl block md:hidden"
            />
          )}
        </nav>

        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{
            x: hamburgerState ? "0%" : "100%",
            opacity: hamburgerState ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed top-0 w-full h-screen flex justify-center mt-29 text-center bg-white px-4 pb-4"
        >
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate={hamburgerState ? "show" : "hidden"}
            className="flex flex-col gap-4 items-center mt-15"
          >
            {NAV_LINKS.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setHamburgerState(false)}
              >
                <motion.li
                  variants={itemVariants}
                  className="leading-160 text-blacky py-1"
                >
                  {item.title}
                </motion.li>
              </Link>
            ))}
            <Button text={"Contact"} variant={"primary"} className={"px-8"} />
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
