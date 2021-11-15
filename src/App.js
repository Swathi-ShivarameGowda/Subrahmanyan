import React from 'react';
import Home from './pages/Home';
import Header from './pages/Header';
import Earlylife from './pages/Earlylife';
import Soilscience from './pages/Soilscience';
import Foodtech from './pages/Foodtech';
import Contact from './pages/Contact';
import Awards from './pages/Awards';
import More from './pages/More';
import Iisc from './pages/soilPages/Iisc';
import Rothamsted from './pages/soilPages/Rothamsted';
import GJFowler from './pages/soilPages/GJFowler';
import References from './pages/soilPages/References';
import Cftri from './pages/foodPages/Cftri';
import Cheluvajamanni from './pages/foodPages/Cheluvajamanni';
import Philippines from './pages/foodPages/Philippines';
import PprcIiftp from './pages/foodPages/PprcIiftp';
import PprcResearch from './pages/foodPages/PprcResearch';
import PostHarvestTech from './pages/foodPages/PostHarvestTech';
import CompleteList from './pages/foodPages/CompleteList';
import InfantFood from './pages/foodPages/cftriPages/InfantFood';
import Biographies from './pages/foodPages/cftriPages/Biographies';
import InfantFoodPaper1 from './pages/foodPages/cftriPages/InfantFoodPaper1';
import InfantFoodPaper2 from './pages/foodPages/cftriPages/InfantFoodPaper2';
import Spices from './pages/foodPages/cftriPages/Spices';
import Tapioca from './pages/foodPages/cftriPages/Tapioca';
import Navbar from './components/Navbar';
import Scroll from './components/Scroll';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
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
                        <Route path="/soil-science" component={Soilscience} />
                        <Route path="/iisc" component={Iisc} />
                        <Route path="/rothamsted" component={Rothamsted} />
                        <Route path="/gjfowler" component={GJFowler} />
                        <Route path="/references" component={References} />
                        <Route path="/food-tech" component={Foodtech} />
                        <Route path="/cftri" component={Cftri} />
                        <Route path="/cheluvajamanni" component={Cheluvajamanni} />
                        <Route path="/philippines" component={Philippines} />
                        <Route path="/pprc-iiftp" component={PprcIiftp} />
                        <Route path="/pprc-research" component={PprcResearch} />
                        <Route path="/post-harvest-tech" component={PostHarvestTech} />
                        <Route path="/complete-list" component={CompleteList} />
                        <Route path="/infant-food" component={InfantFood} />
                        <Route path="/biographies" component={Biographies} />
                        <Route path="/infant-food-paper1" component={InfantFoodPaper1} />
                        <Route path="/infant-food-paper2" component={InfantFoodPaper2} />
                        <Route path="/spices" component={Spices} />
                        <Route path="/tapioca-cassava" component={Tapioca} />
                        <Route path="/awards" component={Awards} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/more" component={More} />
                    </Switch>
            </div>
                <div style={{ backgroundColor: 'darkblue', height: '200px', width: '100%', marginTop: '100px' }} />
                <Scroll showBelow={250} />
            </Router>
            
            </>
    );
}

export default App;
