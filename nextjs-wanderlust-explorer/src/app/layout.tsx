import type { Metadata } from "next";
import { FavoritesProvider } from "@/components/favorites-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wanderlust Explorer | Find your way out there",
  description: "Discover thoughtful local experiences around the world.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <FavoritesProvider>{children}</FavoritesProvider>
      </body>
    </html>
  );
}
