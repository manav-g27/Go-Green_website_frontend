
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Footer from './components/Component4_Footer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Component1/>
      <Component2/>
      <Component3/>
      <Footer/>
    </div>
  );
}

export default App;
