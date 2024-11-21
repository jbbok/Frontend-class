import { ReactNode } from "react";
import "./global.css";
import Link from "next/link";
import style from "./layout.module.css";

const Rootlayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>☃ ONEBITE BOOKS ☃</Link>
          </header>
          <main>{children}</main>
          <footer>제작 @BBO</footer>
        </div>
      </body>
    </html>
  );
};

export default Rootlayout;
