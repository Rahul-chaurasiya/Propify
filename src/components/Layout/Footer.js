import React from "react";
import { BsGithub, BsInstagram, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer pt-4 d-flex flex-column align-items-center justify-content-center bg-dark text-light p-2">
      <h6>All Right Reserved &copy; PROPIFY</h6>
      <div className="d-flex flex-row p-2">
        <p className="me-4" title="Github">
          <Link to="/">
            <BsGithub color="black" size={25} />
          </Link>
        </p>
        <p className="me-4" title="Instagram">
          <Link to="/">
            <BsInstagram color="black" size={25} />
          </Link>
        </p>
        <p className="me-4" title="Facebook">
          <Link to="/">
            <BsFacebook color="black" size={25} />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
