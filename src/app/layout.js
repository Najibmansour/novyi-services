import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/layout/navbar/components/navbar";
import { Toaster } from "sonner";
import BgGradiant from "@/components/layout/bg/bg-gradiant";
import { Footer } from "@/components/layout/footer/footer";

export const metadata = {
  title: "Novo Concept",
  description: "Novo Concept",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative" suppressHydrationWarning={true}>
        <Toaster
          position="top-center"
          richColors
          toastOptions={{
            unstyled: false,
            classNames: {
              error: "",
              success: "",
              warning: "",
              info: "",
            },
          }}
        />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
