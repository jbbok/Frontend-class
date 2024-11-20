import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div>세팅헤더</div>
      {children}
    </div>
  );
};

export default Layout;
