import React from 'react';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Earlylife from './pages/Earlylife';
import AcetoneFermentation from './pages/iisc/AcetoneFermentation';
import GJFowler from './pages/iisc/GJFowler';
import Rothamsted from './pages/iisc/Rothamsted';
import SoilScienceAndSanitation from './pages/iisc/SoilScienceAndSanitation';
import VitaminsAndEnzymes from './pages/iisc/VitaminsAndEnzymes';
import SoyaBeanMilk from './pages/iisc/SoyaBeanMilk';
import Pencillin from './pages/iisc/Pencillin';
import CVRamanAndSubrahmanyan from './pages/iisc/CVRamanAndSubrahmanyan';
import Cheluvajamanni from './pages/cftri/Cheluvajamanni';
import Cftri from './pages/cftri/Cftri';
import CftriContinued from './pages/cftri/CftriContinued';
import DevelopmentAmulFood from './pages/cftri/infantfood/DevelopmentAmulFood';
import Biographies from './pages/cftri/infantfood/Biographies';
import DevelopmentAmulFoodContinued from './pages/cftri/infantfood/DevelopmentAmulFoodContinued';
import Process from './pages/cftri/infantfood/Process';
import ProcessContinued from './pages/cftri/infantfood/ProcessContinued';
import ProcessContinued2 from './pages/cftri/infantfood/ProcessContinued2';
import Sago from './pages/cftri/tapiocacasava/Sago';
import TapiocaMacaroni from './pages/cftri/tapiocacasava/TapiocaMacaroni';
import MysoreFlour from './pages/cftri/tapiocacasava/MysoreFlour';
import GarlicPowder from './pages/cftri/spices/GarlicPowder';
import Oleoresins from './pages/cftri/spices/Oleoresins';
import CoffeeTea from './pages/cftri/CoffeeTea';
import Fruits from './pages/cftri/Fruits';
import Rice from './pages/cftri/Rice';
import Infestation from './pages/cftri/Infestation';
import Philippines from './pages/Philippines';
import Pprc from './pages/pprc/Pprc';
import Research from './pages/pprc/Research';
import ResearchContinued from './pages/pprc/ResearchContinued';
import PostHarvestTech from './pages/pprc/PostHarvestTech';
import Awards from './pages/Awards';
import Sitemap from './pages/Sitemap';


import Navbar from './components/Navbar';
import Scroll from './components/Scroll';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.css';

function App() {


    return (
        <>
            <Router>
                <Navbar />
            <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/early-life" component={Earlylife} />
                        <Route path="/acetone-fermentation" component={AcetoneFermentation} />
                        <Route path="/gjfowler" component={GJFowler} />
                        <Route path="/rothamsted" component={Rothamsted} />
                        <Route path="/soil-science-sanitation" component={SoilScienceAndSanitation} />
                        <Route path="/vitamins-enzymes" component={VitaminsAndEnzymes} />
                        <Route path="/soyabean-milk" component={SoyaBeanMilk} />
                        <Route path="/pencillin-glucanate-and-soluble-casein" component={Pencillin} />
                        <Route path="/cvraman-subrahmanyan" component={CVRamanAndSubrahmanyan} />
                        <Route path="/cheluvajamanni" component={Cheluvajamanni} />
                        <Route path="/cftri" component={Cftri} />
                        <Route path="/cftri-continued" component={CftriContinued} />
                        <Route path="/development-amul-food" component={DevelopmentAmulFood} />
                        <Route path="/development-amul-food-continued" component={DevelopmentAmulFoodContinued} />
                        <Route path="/process" component={Process} />
                        <Route path="/process-continued" component={ProcessContinued} />
                        <Route path="/process-continued2" component={ProcessContinued2} />
                        <Route path="/biographies" component={Biographies} />
                        <Route path="/sago" component={Sago} />
                        <Route path="/tapioca-macaroni" component={TapiocaMacaroni} />
                        <Route path="/mysore-flour" component={MysoreFlour} />
                        <Route path="/garlic-powder" component={GarlicPowder} />
                        <Route path="/oleoresins" component={Oleoresins} />
                        <Route path="/coffee-tea" component={CoffeeTea} />
                        <Route path="/fruits" component={Fruits} />
                        <Route path="/rice" component={Rice} />
                        <Route path="/infestation" component={Infestation} />
                        <Route path="/philippines" component={Philippines} />
                        <Route path="/pprc" component={Pprc} />
                        <Route path="/research" component={Research} />
                        <Route path="/research-continued" component={ResearchContinued} />
                        <Route path="/post-harvest-tech" component={PostHarvestTech} />
                        <Route path="/awards" component={Awards} />
                        <Route path="/site-map" component={Sitemap} />
                    </Switch>
            </div>
                <Footer />
                <Scroll showBelow={250} />
            </Router>
            
            </>
    );
}

export default App;
