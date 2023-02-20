import React from "react";
import { Link } from "react-router-dom";
import { darkEt, pinkEt, cyanEt } from "../redux/actions/set";
import { useDispatch } from "react-redux";
function Navbar() {
  const dispatch = useDispatch();

  return (
    <di
      v
      className="mb-5 px-5 py-3 d-flex justify-content-between align-items-center border fs-5"
    >
      <div className="border border p-2">
        <div>LOGO</div>
      </div>

      <ul className="navbar-list p-2 d-flex gap-3 m-0">
        <li className=" bg-warning rounded">
          <Link className="p-2" to="/home">
            Home
          </Link>
        </li>
        <li className="bg-warning rounded">
          <Link className="p-2" to="/about">
            About
          </Link>
        </li>
        <li className=" bg-warning rounded">
          <Link className="p-2" to="/contact">
            Contact
          </Link>
        </li>
        <li className="p-1 bg-dark text-light rounded">
          <div className="dropdown">
            <button
              className="btn btn-warning dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ARXA FON
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li className="m-2">
                <button
                  onClick={() => dispatch(darkEt())}
                  className="dropdown-item d-flex justify-content-between align-items-center"
                >
                  <span>Dark</span>
                  <i
                    className="fa fa-lightbulb-o"
                    style={{ fontSize: "24px", color: "black" }}
                  ></i>
                </button>
              </li>
              <li className="m-2">
                <button
                  onClick={() => dispatch(pinkEt())}
                  className="dropdown-item d-flex justify-content-between align-items-center"
                >
                  <span style={{ color: "pink" }}>Pink</span>
                  <i
                    className="fa fa-lightbulb-o"
                    style={{ fontSize: "24px", color: "pink" }}
                  ></i>
                </button>
              </li>
              <li className="m-2">
                <button
                  onClick={() => dispatch(cyanEt())}
                  className="dropdown-item  d-flex justify-content-between align-items-center"
                >
                  <span style={{ color: "cyan" }}>Cyan</span>
                  <i
                    className="fa fa-lightbulb-o"
                    style={{ fontSize: "24px", color: "cyan" }}
                  ></i>
                </button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </di>
  );
}

export default Navbar;
