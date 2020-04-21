import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProfilePageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="photo-container">
            <img alt="..." src={require("assets/img/profilePic.jpg")}></img>
          </div>
          <h3 className="title">Enikanorogbon Olaoye</h3>
          <p className="category">Software Engineer</p>
          <div className="content">
            <div className="social-description">
              <i className="fab fa-3x fa-java" />
              <p>Java / Spring</p>
            </div>
            <div className="social-description">
              <i class="fas fa-2x fa-code" />
              <p>C# / .Net</p>
            </div>
            <div className="social-description">
              <i className="fab fa-3x fa-react" />
              <p>React</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
