import './App.css';
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Logo from './logo.jpeg'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'; 
import Menu from './components/Menu';
import CreateSurvey from './components/CreateSurvey';
import  Published  from "./components/Published";
import {Link} from 'react-router-dom';
function App() {

  const[squestions,setSquestions]=useState([]);
  
  return (
   <>
      
      <div className="col-md-10 offset-md-1 col-12 text-center">
        <Router>
          <Link to="/">
              <img className="col-md-6" alt='logo' src={Logo}/> 
          </Link>

          <Switch>
            <Route path="/" component={Menu} exact />
            <Route path="/create" exact >
              <CreateSurvey squestions={squestions} ></CreateSurvey>
            </Route>
              <Route path="/published" component={Published}  />

          </Switch>
        </Router>    
      </div>
   </>
  );
}

export default App;