import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { LOGOIMG } from "../logoImg";

export function MenuNavbar({ navigation }) {
  return (
    <Sheet className="md:hidden">
      <SheetTrigger asChild>
        <MenuIcon className="h-10 w-10 text-white" />
      </SheetTrigger>
      <SheetContent side="left" className="w-[90%] ">
        <SheetHeader>
          <LOGOIMG className="h-20 w-full invert-[1]" />
        </SheetHeader>
        <div className="grid gap-10 py-10">
          {navigation.map(({ title, href }, i) => (
            <Link key={i} href={href} className="text-4xl">
              {title}
            </Link>
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
