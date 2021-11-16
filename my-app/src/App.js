import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import MainPage from './Component/MainPage';
import LoginPage from './Component/LoginPage';
import SignUpPage from './Component/SignUpPage';
import MyCanvas from './Component/MyCanvas2';
import Panoramic from './Component/Panoramic';
import Showroom from './Component/Showroom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><MainPage /></Route>
        <Route path="/login"><LoginPage /></Route>
        <Route path="/signup"><SignUpPage /></Route>
        <Route path="/mycanvas"><MyCanvas /></Route>
        <Route path="/panolen"><Panoramic /></Route>
        <Route path="/showroom"><Showroom /></Route>
      </Switch>

    </Router>
  )
}

export default App;
