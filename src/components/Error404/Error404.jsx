import "./Error404.scss";
import React from "react";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import { ReactComponent as ErrorImage } from "../../assets/error404.svg";

/* 
TODO: NavLink and Button have seperate focus --> bad for tabbing through them, make a button version with NavLink?
*/

const Error404 = () => {
  return (
    <div className="error-container">
      <div className="error">
        <ErrorImage />
        <div className="error__main">
          <h2 className="error__h2">404 Page Not found Error!</h2>
          <p className="error__p">
            We couldn't find the page you were looking for.
          </p>
        </div>
        <div className="error__button-wrapper">
          <NavLink to={"/"} className="error__button">
            <Button variant={"primary"} icon={"west"}>
              Back to Home
            </Button>
          </NavLink>
          <NavLink to={"#"} className="error__button">
            <Button variant={"text-only"} icon={"bug_report"}>
              Report Bug
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Error404;
