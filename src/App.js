import React from 'react';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Earlylife from './pages/Earlylife';
import AcetoneFermentation from './pages/iisc/AcetoneFermentation';
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

import Soilscience from './pages/Soilscience';
import Foodtech from './pages/Foodtech';
import Contact from './pages/Contact';
import Awards from './pages/Awards';
import Sitemap from './pages/morePages/Sitemap';
import Iisc from './pages/soilPages/Iisc';
import GJFowler from './pages/soilPages/GJFowler';
import References from './pages/soilPages/References';
import Philippines from './pages/foodPages/Philippines';
import PprcIiftp from './pages/foodPages/PprcIiftp';
import PprcResearch from './pages/foodPages/PprcResearch';
import PprcResearchContinued from './pages/foodPages/PprcResearchContinued';
import PostHarvestTech from './pages/foodPages/PostHarvestTech';
import CompleteList from './pages/foodPages/CompleteList';
import Spices from './pages/foodPages/cftriPages/Spices';
import Tapioca from './pages/foodPages/cftriPages/Tapioca';
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

                        <Route path="/soil-science" component={Soilscience} />
                        <Route path="/iisc" component={Iisc} />
                        <Route path="/gjfowler" component={GJFowler} />
                        <Route path="/references" component={References} />
                        <Route path="/food-tech" component={Foodtech} />
                        <Route path="/philippines" component={Philippines} />
                        <Route path="/pprc-iiftp" component={PprcIiftp} />
                        <Route path="/pprc-research" component={PprcResearch} />
                        <Route path="/pprc-research-continued" component={PprcResearchContinued} />
                        <Route path="/post-harvest-tech" component={PostHarvestTech} />
                        <Route path="/complete-list" component={CompleteList} />
                        <Route path="/spices" component={Spices} />
                        <Route path="/tapioca-cassava" component={Tapioca} />
                        <Route path="/awards" component={Awards} />
                        <Route path="/contact" component={Contact} />
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
