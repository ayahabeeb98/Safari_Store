import './App.css';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {RouteWrapper} from './routes/RouteWrapper';
import Home from './pages/home';
import BaseLayout from "./layouts/BaseLayout";

function App() {
  return (
    <Router>
        <Switch>
            <RouteWrapper path="/" exact component={Home} layout={BaseLayout}/>
        </Switch>
    </Router>
  );
}

export default App;
