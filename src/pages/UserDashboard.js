import React from "react";
import "./UserDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icon from "@fortawesome/free-solid-svg-icons";

const UserDashboard = () => {
  return (
    <div className="d-flex dashboard-body">
      <div className="d-flex flex-column flex-shrink-0 p-3 text-white side-bar">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <img
            src={require("./assets/Logo-Fi.png")}
            alt="Logo"
            className="logo"
          />
          <span className="fs-4 logo-title">Codeaza</span>
        </a>

        <hr></hr>

        <ul className="nav nav-pills flex-column nav-options">
          <li className="nav-item mb-1">
            <a href="/" className="nav-link active">
              <FontAwesomeIcon className="nav-icon" icon={icon.faHome} />
              Home
            </a>
          </li>
          <li className="nav-item mb-1">
            <a href="/" className="nav-link text-white">
              <FontAwesomeIcon className="nav-icon" icon={icon.faMessage} />
              Inbox
            </a>
          </li>
          <li className="nav-item mb-1">
            <a href="/" className="nav-link text-white">
              <FontAwesomeIcon className="nav-icon" icon={icon.faBookmark} />
              Bookmarks
            </a>
          </li>
          <li className="nav-item mb-1">
            <a href="/" className="nav-link text-white">
              <FontAwesomeIcon className="nav-icon" icon={icon.faCalendar} />
              Schedule
            </a>
          </li>
        </ul>

        <hr></hr>

        <div className="dropdown">
          <a
            href="/"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={require("./assets/user.png")}
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>User</strong>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <a className="dropdown-item" href="/">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-flued container-body">
        <div className="topbar d-flex">
          <div className="px-5" style={{ width: "50%" }}>
            <div className="input-group">
              <div className="searchIcon">
                <FontAwesomeIcon
                  className="nav-icon"
                  icon={icon.faSearch}
                  style={{ height: "17px", width: "17px", color: "#2A3A49" }}
                />
              </div>

              <input
                type="text"
                className="form-control"
                placeholder="Find projects or clients"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div
            className="px-5 d-flex"
            style={{
              width: "50%",
              flexDirection: "row-reverse",
            }}
          >
            <a href="/" className="mx-2" style={{ color: "#2A3A49" }}>
              <FontAwesomeIcon
                className="nav-icon"
                icon={icon.faRightFromBracket}
              />
            </a>
            <a href="/" className="mx-2" style={{ color: "#2A3A49" }}>
              <FontAwesomeIcon className="nav-icon" icon={icon.faMessage} />
            </a>
            <a href="/" className="mx-2" style={{ color: "#2A3A49" }}>
              <FontAwesomeIcon className="nav-icon" icon={icon.faBell} />
            </a>
          </div>
        </div>

        <div className="p-4 ">
          <h2>User dashboard</h2>
          <p>This is a simple text.</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
