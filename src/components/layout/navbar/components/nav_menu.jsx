import Link from "next/link";
import React from "react";
import { MenuNavbar } from "../menunavbar";
import Search from "./search_bar";

const navigation = [
  { title: "Home", href: "/" },
  { title: "Follow Us", href: "/" },
  { title: "Contact Us", href: "/" },
];

const NovoNavigation = (props) => {
  return (
    <div className="flex items-center md:flex-row flex-row-reverse justify-end">
      <Search />
      <nav className="hidden md:justify-end text-white md:flex md:space-x-16 md:mx-16 flex-1 ">
        {navigation.map(({ title, href }, i) => (
          <Link
            key={i}
            href={href}
            className="text-xl tracking-wide transition-all hover:scale-105 hover:shadow-2xl"
          >
            {title}
          </Link>
        ))}
      </nav>
      <div className="md:hidden">
        <MenuNavbar navigation={navigation} />
      </div>
    </div>
  );
};

export default NovoNavigation;
