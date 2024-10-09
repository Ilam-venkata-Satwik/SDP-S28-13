import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Appbar from './components/Appbar';
import Show   from  './components/Show';
import HomePage, {home1 as Home1, home2} from './components/Home';
//import { Store } from '@mui/icons-material';

function App({store}) {
  function Page(){
    switch(store.getState()){
      case "Login":  
        return (<div> <Login /> </div>);
      case "Home":
        return (<div> <HomePage /> </div>);
        case "Show":
          return(<div> <Show /> </div>);
      default:
        return (<div> <HomePage /> </div>);

    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Enterprise Resource Planning</p>
      </header>
      <div className='App-body'>
      <Appbar store={store} />
        <Page />
      </div>
    </div>
  );
}

export default App;
