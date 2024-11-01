import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import ContactItem from "./ContaxtItem";

const ContactList = () => {
  const [filteredList, setFilteredList] = useState([]);
  // const contactLists = useSelector((state) => state.contactList);
  // console.log(contactLists);
  const { ContactList, keyword } = useSelector((state) => state);
  console.log(ContactList, keyword);

  useEffect(() => {
    if (keyword !== "") {
      const list = ContactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(ContactList);
    }
  }, [keyword]);
  return (
    <>
      <h6>Friends List</h6>
      <SearchBar />
      {filteredList.map((item, index) => (
        <ContactItem key={index} item={item} />
      ))}
    </>
  );
};

export default ContactList;
