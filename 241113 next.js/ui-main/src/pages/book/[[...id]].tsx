import React from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  console.log(id);

  return <h1>Book</h1>;
  // return <h1>Book {id[0]}</h1>;
};

export default Index;
