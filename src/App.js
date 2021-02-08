import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';
import './css/project.css';
import './css/work.css';
import './css/home.css';
import './css/about.css';
import './css/footer.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import Work from './components/Work';
import About from './components/About';
import Project from './components/Project';
import Footer from './components/Footer';

function App () {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <Router>
          <NavBar />
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}></Route>
              <Route exact path={process.env.PUBLIC_URL + '/projects'} component={Work}></Route>
              <Route exact path={process.env.PUBLIC_URL + '/project/:id'} component={Project}></Route>
              <Route exact path={process.env.PUBLIC_URL + '/about'} component={About}></Route>
              <Route component={NotFound}></Route>
            </Switch>
        </Router>
      </div>
      <Footer/>
    </div>
        
  );
}

export default App;
