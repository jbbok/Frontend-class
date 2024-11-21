import Link from "next/link";
import style from "./book-item.module.css";

import React from "react";
import { BookData } from "@/types";

const BookItem = ({
  id,
  title,
  subTitle,
  description,
  author,
  publisher,
  coverImgUrl,
}: BookData) => {
  return (
    <Link href={`/book/${id}`} className={style.container}>
      <img src={coverImgUrl} alt={title} />
      <div>
        <div className={style.title}>{title}</div>
        <div className={style.subtitle}>{subTitle}</div>
        <div className={style.author}>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
};

export default BookItem;
