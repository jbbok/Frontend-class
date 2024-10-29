import React from "react";
import { useOutletContext } from "react-router-dom";

interface FollowsersContext {
  nameOfMyUsers: string;
}

const Followers = () => {
  const { nameOfMyUsers } = useOutletContext<FollowsersContext>();
  return <h1>Here are {nameOfMyUsers}의 Followers</h1>;
};

export default Followers;
