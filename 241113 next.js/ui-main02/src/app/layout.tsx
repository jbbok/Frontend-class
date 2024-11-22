import { ReactNode } from "react";
import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";
import { BookData } from "@/types";

const Footer = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book}`
  );

  if (!response.ok) {
    return <footer> 제작 @BBO</footer>;
  }

  const books = await response.json();
  const bookCount = books.length;

  return (
    <footer>
      <div>
        <span>총 {bookCount}권의 책이 있습니다.</span>
      </div>
    </footer>
  );
};

const Rootlayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>☃ ONEBITE BOOKS ☃</Link>
          </header>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default Rootlayout;
