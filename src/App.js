import './App.css';
import headershadow from "./images/headershadow.svg";
// import Union from "./images/Union.svg";
import Header from './components/Header';
import Aside from './components/Aside';
import Whatcomponent from './components/Whatcomponent';
import Whycomponent from './components/Whycomponent';
import Happyclient from './components/Happyclient';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <div>
        <img src={} alt="Loading" className="App-logo" />
      </div> */}
      <div className="headershadow">
        <img src={headershadow} alt="" />
      </div>
      <Header />
      <Aside />
      <Whatcomponent />
      <Whycomponent />
      <Happyclient />
      <Footer />
    </div>
  );
}

export default App;
