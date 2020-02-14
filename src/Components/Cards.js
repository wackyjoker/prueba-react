import React, { Component } from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { CardInfo, responsive } from "./Cards/CardModel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default class Cards extends Component {
  render() {
    const Content = CardInfo.map((info, index) => {
      return (
        <div key={index}>
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/200x100"
              />
              <Card.Title>Card {info.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>{info.text}</Card.Text>
              <ButtonGroup aria-label="Basic example" className="w-100">
                <Button variant="dark" size="lg">
                  View
                </Button>
                <Button variant="outline-info" size="lg">
                  Add
                </Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </div>
      );
    });

    return (
      <div id="card-container">
        <h2> Recommended Products </h2>
        <Carousel responsive={responsive} swipeable={true} centerMode={false}>
          {Content}
        </Carousel>
      </div>
    );
  }
}
