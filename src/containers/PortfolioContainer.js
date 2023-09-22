import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "../components/Header.js"
import Portfolio from "../components/Portfolio.js";
import Home from "../components/Home.js";
import AboutMe  from "../components/AboutMe.js";
import ContactMe from "../components/ContactMe.js";


const PortfolioContainer = () => {
    return ( 
        <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </Router>

        
     );
}
 
export default PortfolioContainer;