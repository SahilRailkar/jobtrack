import './App.css';
import Kanban from './pages/Kanban/Kanban';
import Login from './pages/Login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Kanban}/>
        <Route path="/login" exact component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
