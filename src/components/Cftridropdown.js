import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./Dropdown.css";

export default function Cftridropdown({ dropdownList, cftriDropdownList }) {
    const [dropdown, setDropdown] = useState(false);
    const [cftdropdown, setCftDropdown] = useState(false);
    const cftri = true;
   
    return (
        <>
            <ul
                className={dropdown ? "services-submenu clicked" : "services-submenu"}
                onClick={() => setDropdown(!dropdown)}
            >
                <li
                    key={dropdownList[0].id}
                    className="cftri-submenu-item"
                    onMouseEnter={() => setCftDropdown(true)}
                    onMouseLeave={() => setCftDropdown(false)}
                >
                    <Link to={dropdownList[0].path}>{dropdownList[0].title}</Link>
                    {cftdropdown && <Dropdown dropdownList={cftriDropdownList} cftri={cftri} />}
                </li>
                <li key={dropdownList[1].id}>
                    <Link
                        to={dropdownList[1].path}
                        className={dropdownList[1].cName}
                        onClick={() => setDropdown(false)}
                    >
                        {dropdownList[1].title}
                    </Link>
                </li>
                <li key={dropdownList[2].id}>
                    <Link
                        to={dropdownList[2].path}
                        className={dropdownList[2].cName}
                        onClick={() => setDropdown(false)}
                    >
                        {dropdownList[2].title}
                    </Link>
                </li>
                
            </ul>
        </>
    );
}


