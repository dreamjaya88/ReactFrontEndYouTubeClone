import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Recommendations from './Recommendations';
import SearchPage from './SearchPage';
import Sidebar from './Sidebar';

function App() {
  return (
    // BEM naming convenstion
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <Recommendations />
            </div>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
