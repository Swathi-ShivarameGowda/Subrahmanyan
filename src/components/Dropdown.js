import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cftridropdown from './Cftridropdown'
import { cftriDropdown } from "./NavItems";
import "./Dropdown.css";

function Dropdown({ dropdownList, cftri }) {
    const [dropdown, setDropdown] = useState(false);

  return (
    <>
          {!cftri && <ul
              className={dropdown ? "services-submenu clicked" : "services-submenu"}
              onClick={() => setDropdown(!dropdown)}
          >
              {dropdownList.map((item) => {
                  return (

                      <li key={item.id}>
                          <Link
                              to={item.path}
                              className={item.cName}
                              onClick={() => setDropdown(false)}
                          >
                              {item.title}
                          </Link>
                      </li>
                  );
              })}
          </ul>
          }
          {cftri && <ul
              className={dropdown ? "services-submenu clicked" : "cftri-services-submenu"}
              onClick={() => setDropdown(!dropdown)}
          >
              {dropdownList.map((item) => {
                  return (

                      <li key={item.id}>
                          <Link
                              to={item.path}
                              className={item.cName}
                              onClick={() => setDropdown(false)}
                          >
                              {item.title}
                          </Link>
                      </li>
                  );
              })}
          </ul>
          }
    </>
  );
}

export default Dropdown;
