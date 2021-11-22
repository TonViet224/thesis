import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import MainPage from './Component/MainPage';
import LoginPage from './Component/LoginPage';
import SignUpPage from './Component/SignUpPage';
import MyCanvas from './Component/MyCanvas2';
import Panoramic from './Component/Panoramic';
import Showroom from './Component/Showroom';
import ItemPage from './Component/ItemPage';
import Cartpage from './Component/Cartpage';
import UserProfilePage from './Component/UserProfilePage';
import OrderPage from './Component/OrderPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><MainPage /></Route>
        <Route path="/login"><LoginPage /></Route>
        <Route path="/signup"><SignUpPage /></Route>
        <Route path='/itempage'><ItemPage /></Route>
        <Route path='/cartpage'><Cartpage /></Route>
        <Route path='/userprofile'><UserProfilePage /></Route>
        <Route path='/orderpage'><OrderPage /></Route>
        <Route path="/mycanvas"><MyCanvas /></Route>
        <Route path="/panolen"><Panoramic /></Route>
        <Route path="/showroom"><Showroom /></Route>
      </Switch>

    </Router>
  )
}

export default App;
