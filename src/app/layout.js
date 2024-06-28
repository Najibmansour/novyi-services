import "@/app/globals.css";
import { Toaster } from "sonner";
export const metadata = {
  title: "Novo Concept",
  description: "Novo Concept",
  keywords: [
    "Brand",
    "Branding",
    "Marketing",
    "Advertising",
    "Market",
    "Business",
    "Vision",
    "clients",
    "puzzle",
    "success",
    "strategies",
    "service",
    "needs",
    "consulting",
    "identity",
    "strong",
    "campaigns",
    "landscape",
    "partner",
    "reality",
    "modern",
    "confidence",
    "marketplace",
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
