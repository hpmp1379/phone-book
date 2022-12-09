import React from "react";
import { Row, Col } from "react-bootstrap";
import style from "./ContactItem.module.css";

const ContactItem = ({ item }) => {
  return (
    <>
      <div className={style.box}>
        <Row>
          <Col xs="auto">
            <img
              src="https://cdn.pixabay.com/photo/2013/07/12/15/07/hat-149479_960_720.png"
              alt=""
            />
          </Col>
          <Col xs="auto" className={style.text}>
            <h5>{item.name}</h5>
            <p>{item.phoneNumber}</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ContactItem;
