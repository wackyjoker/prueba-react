import React from "react";
import Parallax from "react-rellax";
class Palla extends React.Component {
  render() {
    return (
      <div>
        <Parallax
          percentage={-0.25}
          speed={8.5}
          centered={true}
          zIndex={11}
          className="palla-text"
        >
          <div id="slogan">business cross the world </div>
          <img src={require("../styles/img/sunrise.jpg")} alt="sunrise" />
        </Parallax>
      </div>
    );
  }
}

export default Palla;
