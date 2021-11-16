import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { navItems } from "./NavItems";
import { soilScienceDropdown, foodTechnologyDropdown, cftriDropdown, moreDropdown } from "./NavItems";
import Dropdown from "./Dropdown";
import Cftridropdown from './Cftridropdown'

function Navbar() {
    const [dropdownSoil, setDropdownSoil] = useState(false);
    const [dropdownFood, setDropdownFood] = useState(false);
    const [dropdownMore, setDropdownMore] = useState(false);

    const location = useLocation();


  return (
      <>
          <div style={{ backgroundColor: '#e6e6e6', width: '100%', height: '130px' }} >
              <h1>DR.V. SUBRAHMANYAN</h1>
              <h3>A man who dedicated his life to research about food science and a founder of many great institutes.</h3>
          </div>
      <nav className="navbar">
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Soil Science") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdownSoil(true)}
                  onMouseLeave={() => setDropdownSoil(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                      {dropdownSoil && <Dropdown dropdownList={soilScienceDropdown} />}
                </li>
              );
              }
              if (item.title === "Food Technology") {
                  return (
                      <li
                          key={item.id}
                          className={item.cName}
                          onMouseEnter={() => setDropdownFood(true)}
                          onMouseLeave={() => setDropdownFood(false)}
                      >
                          <Link to={item.path}>{item.title}</Link>
                          {dropdownFood && <Cftridropdown dropdownList={foodTechnologyDropdown} cftriDropdownList={cftriDropdown} />}
                      </li>
                  );
              }
              if (item.title === "More") {
                  return (
                      <li
                          key={item.id}
                          className={item.cName}
                          onMouseEnter={() => setDropdownMore(true)}
                          onMouseLeave={() => setDropdownMore(false)}
                      >
                          <Link to={location.pathname}>{item.title}</Link>
                          {dropdownMore && <Dropdown dropdownList={moreDropdown} />}
                      </li>
                  );
              }
              
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
