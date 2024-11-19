import React, { useState } from "react";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={onChangeSearch} />
      <button>검색</button>
    </div>
  );
};

export default Searchbar;
