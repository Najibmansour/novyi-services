import Link from "next/link";
import React from "react";
import { MenuNavbar } from "../menunavbar";

const navigation = [
  { title: "Home", href: "/" },
  { title: "Follow Us", href: "/" },
  { title: "Contact Us", href: "/" },
];

const NovoNavigation = (props) => {
  return (
    <div {...props}>
      <nav className="hidden justify-end text-white md:flex space-x-16 mx-16">
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
