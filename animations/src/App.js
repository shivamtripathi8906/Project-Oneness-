import Login from './Components/Login';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Loginuser from './Components/Loginuser';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Login}/>
        <Route exact path="/login" component={Loginuser}/>
        <Route exact path="/home" component={Home} />
       </BrowserRouter>
    </div>
  );
}

export default App;
