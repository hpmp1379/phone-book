//search 적용
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";
import SearchBox from "./SearchBox";

const ContactList = () => {
  // search 할때 쓰이는 키워드 값도 받아옴
  const { contactList, keyword } = useSelector((state) => state);
  const [filteredList, setFilteredList] = useState([]);
  // console.log(book);

  useEffect(() => {
    if (keyword !== "") {
      let book = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(book);

      //입력값이 없을때
    } else {
      setFilteredList(contactList);
    }
  }, [keyword, contactList]);

  return (
    <div>
      <SearchBox />
      <div>
        인원 : {filteredList.lengths}
        {filteredList.map((item) => (
          <ContactItem item={item} />
          //item={item} 바로 자식으로 보낼때는 굳이 이덕스까지 쓸 필요는 없어서 props
        ))}
      </div>
    </div>
  );
};

export default ContactList;
