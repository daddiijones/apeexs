import "./App.css";

import {
  HashRouter as Router,
  Route
} from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Faq from "./components/Faq";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <Router>
        <div>
          <Header />
          <Route path="/faq" component={Faq} />
          <Route exact path="/" component={Body} />
          <Footer />
        </div>
    </Router>
  );
}

export default App;
