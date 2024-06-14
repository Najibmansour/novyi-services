import Link from "next/link";
import React from "react";
import { MenuNavbar } from "../menunavbar";

const navigation = [
  { title: "Home", href: "/" },
  { title: "New In", href: "/" },
  { title: "Products", href: "/" },
  { title: "About us", href: "/" },
];

const NovoNavigation = (props) => {
  return (
    <div {...props}>
      <nav className="hidden justify-evenly text-white md:flex ">
        {navigation.map(({ title, href }, i) => (
          <Link
            key={i}
            href={href}
            className="text-xl tracking-wide transition-all hover:scale-105 hover:underline hover:shadow-2xl"
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
