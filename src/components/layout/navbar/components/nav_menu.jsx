import Link from "next/link";
import React from "react";
import { MenuNavbar } from "../menunavbar";
import Search from "./search_bar";

const navigation = [
  { title: "Home", href: "/" },
  { title: "Follow Us", href: "/" },
];

const NovoNavigation = (props) => {
  return (
    <div className="flex flex-row-reverse items-center justify-end md:flex-row">
      {/* <Search /> */}
      <nav className="hidden flex-1 text-white md:mx-16 md:flex md:justify-start md:space-x-7">
        {navigation.map(({ title, href }, i) => (
          <Link
            key={i}
            href={href}
            className="hover: text-xl tracking-wide transition-all hover:scale-105"
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
