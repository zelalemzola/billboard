import { Yeseva_One } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Yeseva_One({ subsets: ["latin"] , weight:'400' });



 export const metadata = {
   title: "Askamar billboard",
  description: "Askamar billboard",
  other: {
    name: "google-site-verification",
    content: "F_O1-kgwj8n6OXwqAfUaAU511DHEqwoDlqRsB40QZPk",
  },
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
