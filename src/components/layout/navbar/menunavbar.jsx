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
import { LOGOIMG } from "@/components/logo/LogoImg";

export function MenuNavbar({ navigation }) {
  return (
    <Sheet className="md:hidden">
      <SheetTrigger asChild>
        <MenuIcon className="size-10 text-[#fafafa]" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[90%] border-0 bg-[#9a0202] opacity-75"
      >
        <SheetHeader>
          <LOGOIMG className="h-20 w-full" />
        </SheetHeader>
        <div className="grid gap-10 py-10">
          {navigation.map(({ title, href }, i) => (
            <Link key={i} href={href} className="text-4xl text-[#fafafa]">
              {title}
            </Link>
          ))}
        </div>
        <SheetFooter>
          {/* <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
