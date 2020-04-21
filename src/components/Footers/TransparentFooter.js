/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          <ul>
            <li>
              <a href="#" target="_blank">
                Eniqs Inc
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                About Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}
          <a href="#" target="_blank">
            .
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
