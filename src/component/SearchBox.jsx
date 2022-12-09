import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import style from "./SearchBox.module.css";

const SearchBox = () => {
  const [keyword, setKeyword] = useState(); //키워드값(입력값)을 인식하게
  let dispatch = useDispatch();

  const searchByName = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH_BY_NAME", payload: { keyword } });
  };

  return (
    <form className={style.form} onSubmit={searchByName}>
      <Row>
        <Col xs md="9">
          <Form.Control
            type="text"
            placeholder="이름 입력해주세요"
            onChange={(event) => setKeyword(event.target.value)}
          />
        </Col>
        <Col xs md="3">
          <Button variant="outline-secondary" type="submit">
            <BsSearch />
            찾기
          </Button>
        </Col>
      </Row>
    </form>
  );
};

export default SearchBox;
