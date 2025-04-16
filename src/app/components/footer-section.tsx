import React from "react";
import Image from "next/image";
import WhiteLogo from "./white-logo";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/data";

export type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterSection = () => {
  return (
    <footer className="flexCenter bg-dark text-white">
      <div className="padding-container py-12 max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[5%] md:flex-row">
          <div className="flex-1">
            <Link href="/">
              <WhiteLogo className="-ml-[10px]" />
            </Link>
            <p className="pt-3 font-medium text-gray-400">
              Sebarin adalah platform undangan digital yang membantu kamu
              membuat undangan online digital website custom dengan berbagai
              acara lainnya.
            </p>
          </div>
          {/* FOOTER LINK */}
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((item) => (
              <FooterColumn title={item.title} key={item.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-400">
                  {item.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col gap-5">
            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              {FOOTER_CONTACT_INFO.links.map((link) => (
                <Link
                  href="/"
                  key={link.label}
                  className="flex gap-4 flex-col lg:flex-row"
                >
                  <p className="medium-14 whitespace-nowrap text-gray-400">
                    {link.label}
                  </p>
                  <p className="text-gray-400">{link.value}</p>
                </Link>
              ))}
            </FooterColumn>
          </div>

          {/* SOCIAL */}
          <div className="flex flex-col gap-5">
            <FooterColumn title={SOCIALS.title}>
              <ul className="regular-14 flex gap-4 text-white">
                {SOCIALS.links.map((link) => (
                  <Link href="/" key={link}>
                    <Image src={link} alt="social" width={24} height={24} />
                  </Link>
                ))}
              </ul>
            </FooterColumn>
          </div>

          {/* <div className="flex-1">
          <h3 className="font-bold">Ikuti Kami</h3>
          <div className="flex flex-row pt-4 gap-4">
            <div className="rounded-md bg-white p-2 cursor-pointer">
              <FaInstagram className="text-primary size-6" />
            </div>
            <div className="rounded-md bg-white p-2 cursor-pointer">
              <FaWhatsapp className="text-primary size-6" />
            </div>
            <div className="rounded-md bg-white p-2 cursor-pointer">
              <FaFacebook className="text-primary size-6" />
            </div>
          </div>
       
          {/* BOTTOM */}
        </div>
        <Image
          src="/images/divider.png"
          alt="divider"
          layout="responsive"
          width={1920}
          height={1}
          className="w-full h-1"
        />
        <p className="regular-14 w-full text-center text-gray-30">
          2025 Sebarin | All rights reserved
        </p>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default FooterSection;
