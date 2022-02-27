import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import {
  BrowserRouter as Router,
  Route,Link,Switch
} from 'react-router-dom'
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Home from './components/Pages/Home';
import Navbar from './components/Layout/Navbar';
import NoteFound from './components/Pages/NoteFound';
import Adduser from './users/Adduser';
import EditUser from './users/EditUser';
import View from './users/View';

function App() {

  return (
<Router>
    <div className="App">
<Navbar/>


<Switch>
<Route exact path={'/'} component={Home} />
<Route path={'/contact'} component={Contact} />
<Route path={'/about'} component={About} />
<Route exact path={'/users/add'} component={Adduser} />
<Route exact path={'/users/edit/:id'} component={EditUser} />
<Route exact path='/users/view/:id' component={View} />

<Route  component={NoteFound} />


</Switch>
    
    </div>
    </Router>
    );
}

export default App;
