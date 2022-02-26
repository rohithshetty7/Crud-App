import "./App.css";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Navbar from "./components/Layout.js/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Notfound from "./components/pages/Notfound";
import AddUser from "./components/users/AddUser";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />

          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
