import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Slidersec from "./components/Slidersec";
import Section6 from "./components/Section6";
import Section8 from "./components/Section8";
import Loader from './components/Loader';


function App() {
  return (
    <div className="App">
      <Header />
      <Section1 />
      <Section2/>
      <Section3/>
      <Section4 />
      <Section5/>
      <Slidersec/>
      <Section6/>
      <Section8 />
      <Loader/>
    </div>
  );
}

export default App;
