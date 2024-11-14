import React from "react";
import type { BookData } from "@/types";
import Link from "next/link";
import style from "./book-item.module.css";

const bookItem = ({
  id,
  title,
  subTitle,
  description,
  author,
  publisher,
  coverImgUrl,
}: BookData) => {
  return (
    <Link className={style.container} href={`/book/${id}`}>
      <img src={coverImgUrl} />
      <div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <div className={style.author}>
          {author} | {publisher}
        </div>
      </div>
      <br />
    </Link>
  );
};

export default bookItem;
