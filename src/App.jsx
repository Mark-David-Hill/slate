import { BrowserRouter, Switch, Route } from "react-router-dom";

import icons from "./helpers/icons";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";

import "./styles/main.scss";

icons();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NoPage} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
