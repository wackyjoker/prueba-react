import React from "react";
import logo from "../logo.svg";
import FooterItem, { FooterItems } from "./Footer/FooterItem";
import { Container, Row } from "react-bootstrap";
class Footer extends React.Component {
  render() {
    let content = FooterItems.map((item, index) => {
      return (
        <FooterItem
          key={index}
          title={item.title}
          item1={item.item1}
          item2={item.item2}
          item3={item.item3}
          item4={item.item4}
          item5={item.item5}
        />
      );
    });
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500.
            </p>
          </div>
          <Container className="list-container ">
            <Row>{content}</Row>
          </Container>
        </div>
      </footer>
    );
  }
}

export default Footer;
