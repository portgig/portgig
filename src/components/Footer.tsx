import { footerInfo, socialMedia, footerSupport } from "@/src/constants";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { Buttons } from "@/src/components/export_components";
const Footer = () => {
  return (
    <div className="bg-primary">
      <div className="bodyMargin my-10 py-15 flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col gap-5  w-full">
            <div className="grid grid-cols-3 w-full py-5 text-sm">
              {/* 1 */}
              <div className="flex flex-col gap-3 ">
                <p className="font-bold">Information</p>
                {footerInfo.map((info) => (
                  <Link key={info.label} href={info.link}>
                    <p> {info.label}</p>
                  </Link>
                ))}
              </div>
              {/* 2 */}
              <div className="flex flex-col gap-3">
                <p className="font-bold">Social media</p>
                {socialMedia.map((media) => (
                  <Link key={media.label} href={media.link}>
                    <p> {media.label}</p>
                  </Link>
                ))}
              </div>
              {/* 3 */}
              <div className="flex flex-col gap-3">
                <p className="font-bold">Supprt</p>
                {footerSupport.map((support) => (
                  <Link key={support.label} href={support.link}>
                    <p> {support.label}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="gap-5  flex flex-col  items-center w-full text-sm">
            <h2 className="text-2xl font-black">Sign up for our newsletter</h2>
            <div className="w-66 h-10 bg-white flex gap-1 px-2 py-1">
              <input
                type="text"
                className="w-full outline-none bg-transparent text-secondary"
              />
              <Buttons
                label="Subcribe"
                className="!bg-secondary !rounded-lg !py-1 text-[10px]"
              />
            </div>
            <h2 className="text-[8px]  w-52">
              Subscribe to our newsletter for the latest blog insights, creative
              tips, industry news, and exclusive updates delivered straight to
              your inbox.
            </h2>
          </div>
        </div>

        <div className="flex justify-center gap-20 items-center w-full">
          <div className="flex gap-2 text-white">
            <FaLinkedin />
            <FaTwitter />
            <FaInstagram />
            <FaFacebook />
            <FaYoutube />
          </div>
          <p className="text-xs">© 2025 Portgig. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
