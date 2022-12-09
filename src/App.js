import styles from "./App.module.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";

const App = () => {
  return (
    <div className={styles.app}>
      <h1>Phone Book</h1>
      <Container>
        <Row>
          <Col sm="6">
            <ContactForm />
          </Col>
          <Col sm="6">
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
