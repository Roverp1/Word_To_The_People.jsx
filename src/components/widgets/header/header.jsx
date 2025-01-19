import { Link } from "react-router";

import githubLogo from "../../../assets/img/header/github-logo.svg";

import "./header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container header__content">
          <Link to={"/"}>
            <div className="header__logo">Word to the People</div>
          </Link>
          <nav>
            <a
              href="https://github.com/Roverp1/Word_To_The_People.jsx/"
              target="_blank"
            >
              <img src={githubLogo} alt="link to github" />
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
