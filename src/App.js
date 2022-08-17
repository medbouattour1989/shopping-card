
import './App.css';
import "./css/bootstrap.min.css"
import Navbar from './components/Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar />  
        <Switch>
             <Route exact path="/" component={Home} />
             <Route exact path="/about" component={About}/>
             <Route exact path="/contact" component={Contact}/>
             <Home />
             <About/>
             <Contact />
        </Switch>  
    </div>
    </Router>
  );
}

export default App;
