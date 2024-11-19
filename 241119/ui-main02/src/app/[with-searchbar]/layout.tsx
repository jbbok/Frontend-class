"use client";
import React, { ReactNode } from "react";
import Searchbar from "./searchbar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Searchbar />
      {children}
    </div>
  );
};

export default layout;
