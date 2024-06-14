import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartButton = () => {
  return (
    <Link href="" className="active:scale-95 md:mx-2">
      <ShoppingBag className="h-10 w-10 p-1 text-white"></ShoppingBag>
    </Link>
  );
};

export default CartButton;
