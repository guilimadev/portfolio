// import logo from './logo.svg';
import './App.css';
import Main from './Main';
import About from './About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Projects from './Projects';


function App() {
  return (
    <Router>
      <div className="App">
          <Route path='/' exact component={Main} />
          <Route path='/about' exact component={About} />
          <Route path='/projects' component={Projects} />
      </div>
    </Router>
  );
}

export default App;
