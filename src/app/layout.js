import { Yeseva_One } from "next/font/google";
import '@mantine/tiptap/styles.css';
import '@mantine/core/styles.css';
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Yeseva_One({ subsets: ["latin"] , weight:'400' });

export const metadata = {
  title: "Billboards",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar/> */}
        <div className=''>{children}</div>
        </body>
    </html>
  );
}
