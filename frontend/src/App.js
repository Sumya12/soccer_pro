import './App.css';
import {Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import Login from './components/Auth/Login';

function App() {
  return (
    <>
    <div className='App'>
    <Route path="/" component={HomePage} exact/> 
    </div>
    <div className='App'>
    <Route path="/auth" component={Login}  /> 
    </div>
    </>
  );
}

export default App;
