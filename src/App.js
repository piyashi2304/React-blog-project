// import logo from './logo.svg';
import './App.css';
import RouterCompo from './Route/RouterCompo';
import "../src/style.css"
import Footer from './Route/Footer';
// import FooterCompo from './Component/FooterCompo';
// import  Footer from "../src/Route/Footer"
// import FooterCompo from './Component/FooterCompo';

function App() {
  // console.log(<FooterCompo /> )
  return (
    <div className="App">
     <RouterCompo /> 
     {/* <FooterCompo /> */}
    
    </div>
  );
}

export default App;
