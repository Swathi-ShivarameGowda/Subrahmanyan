import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Header() {
    const [home, setHome] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorE2, setAnchorE2] = React.useState(null);
    let openSoil = Boolean(anchorEl);
    const openFood = Boolean(anchorE2);
    const history = useHistory();

    const handleClickSoilScience = (event) => {
        setAnchorEl(event.currentTarget);
        history.push("/soil-science");
        anchorEl && handleCloseSoil()
    }
    const handleMenuSelection = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClickFoodTech = (event) => {
        setAnchorE2(event.currentTarget);
        history.push("/food-tech");
    }
   // const handleClickAwards = (event) => {
     //    history.push("/awards");
    //}
    //const handleClickContact = (event) => {
      //  history.push("/contact");
    //}
    //const handleClickMore = (event) => {
      //  history.push("/more");
    //}
    const handleCloseSoil = () => {
        setAnchorEl(null);
    };
    const handleCloseFood = () => {
        setAnchorE2(null);
    }

    return (
        <>
            <div style={{ backgroundColor: '#e6e6e6', width: '100%', height: '130px'}} >
                <h1>DR.V. SUBRAHMANYAN</h1>
                <h3>A man who dedicated his life to research about food science and a founder of many great institutes.</h3>
            </div>
            <div className="menulist">
            <Button
                id="basic-button-home"
                onClick={event => history.push("/")}
            >
                    Home
            </Button>

            <Button
                id="basic-button-early"
                onClick={event => history.push("/early-life")}
            >
                    Early Life
            </Button>
            <Button
                    id="basic-button-soil"
                    aria-controls="basic-menu-soil"
                    aria-haspopup="true"
                    aria-expanded={openSoil ? 'true' : undefined}
                    onClick={handleClickSoilScience}
                >
                    Soil Science
            </Button>
                <Menu
                    id="basic-menu-soil"
                    anchorEl={anchorEl}
                    open={openSoil}
                    onClose={handleCloseSoil}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button-soil',
                    }}
                >
                    <MenuItem onClick={handleCloseSoil}>IISC</MenuItem>
                    <MenuItem onClick={handleCloseSoil}>ROTHAMSTED</MenuItem>
                </Menu>
            <Button
                    id="basic-button-food"
                    aria-controls="basic-menu-food"
                    aria-haspopup="true"
                    aria-expanded={openFood ? 'true' : undefined}
                    onClick={handleClickFoodTech}
                >
                    Food Technology
            </Button>
                <Menu
                    id="basic-menu-food"
                    anchorEl={anchorE2}
                    open={openFood}
                    onClose={handleCloseFood}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button-food',
                    }}
                >
                    <MenuItem onClick={handleCloseFood}>CFTRI</MenuItem>
                    <MenuItem onClick={handleCloseFood}>THE PHILIPPINES</MenuItem>
                    <MenuItem onClick={handleCloseFood}>PPRC-IIFTP</MenuItem>
                </Menu>
                <Button
                    id="basic-button-awards"
                    onClick={event => history.push("/awards")}
                >
                    Awards
            </Button>
            <Button
                    id="basic-button-contact"
                    onClick={event => history.push("/contact")}
                >
                    Contact
            </Button>
            <Button
                    id="basic-button-more"
                    onClick={event => history.push("/more")}
                >
                    More
            </Button>
            </div>
        </>
    )
}