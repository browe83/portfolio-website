import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';
import './css/project.css';
import './css/overlay.css';
import './css/work.css';
import './css/home.css';
import Home from './components/Home';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import Work from './components/Work';
import About from './components/About';
import Project from './components/Project';

function App () {
  return (
    <Router>
      <NavBar />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/contact' component={Contact}></Route>
          <Route exact path='/work' component={Work}></Route>
          <Route exact path='/work/:id' component={Project}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      
    </Router>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
