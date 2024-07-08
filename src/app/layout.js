import "@/app/globals.css";
import { Toaster } from "sonner";
export const metadata = {
  title: "Novo Concepts",
  description:
    "Novo Concepts: Your all-in-one business partner, from branding to auditing, consulting, we offer tailored strategies to enhance your brand, and drive sustainable growth.",
  keywords: [
    "Branding",
    "Marketing",
    "Advertising",
    "Auditing",
    "sales",
    "your business",
    "solution",
    "consulting",
    "novo",
    "experts",
    "enhance your product",
    "develop",
    "transparent pricing",
  ],
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
