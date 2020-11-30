import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./Components/HeaderComonents";
import Footer from "./Components/FooterComponents";
import ListEmployeeComponents from './Components/ListEmployeeComponent'
function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Header />
          <div className="container">
            <Switch>
              <Route path = "/" component={ListEmployeeComponents} />
              <Route path = "/employees" component={ListEmployeeComponents} /> 
              <ListEmployeeComponents />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
