import { Linden_Hill } from "next/font/google";
import Link from "next/link";
import React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTiktok,
  IoLogoWhatsapp,
} from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="flex h-28 w-full flex-row items-center justify-center">
      <div className="flex w-min flex-row justify-between gap-5">
        <Link href="/" className="transition-all hover:scale-105">
          <IoLogoTiktok className="size-12" />
        </Link>
        <Link href="/" className="transition-all hover:scale-105">
          <IoLogoInstagram className="size-12" />
        </Link>
        <Link href="/" className="transition-all hover:scale-105">
          <IoLogoFacebook className="size-12" />
        </Link>
        <Link href="/" className="transition-all hover:scale-105">
          <IoLogoWhatsapp className="size-12" />
        </Link>
      </div>
    </footer>
  );
};
