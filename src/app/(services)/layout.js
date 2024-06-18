import { Inika, Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/layout/navbar/components/navbar";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
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
        <main className="relative">
          <Navbar delay={0} duration={1} />
          {children}
        </main>
      </body>
    </html>
  );
}