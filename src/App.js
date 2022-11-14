import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homeview from './Views/Homeview/Home';
import Navbarmade from './Components/Navbar/Navbar';
import Footermain from './Components/Footer/Footer';
import Aboutus from './Views/Aboutview/About';
import ReactDOM from "react-dom/client";
import {
  Route,
  Routes,
} from "react-router-dom";
import Contactus from './Views/Contactus/Contactus';
import Registerform from './Views/Registration View/Register';
import Loginform from './Views/Login/Loginform';
import TermsofUse from './Views/Termsofuse/TermsofUse';
import Privacypolicy from './Views/Privacypolicy/Privacypolicy';
import Besafeonline from './Views/Besafeonline/Besafeonline';
import Customersupport from './Views/Customersupport/Customersupport';


function App() {
  return (
    <div className="App">
      <Navbarmade />
      <Routes>
        <Route exact path='/' element={<Homeview />} />
        <Route exact path='/Aboutus' element={<Aboutus />} />
        <Route exact path='/ContactUs' element={<Contactus />} />
        <Route exact path='/RegisterationForm' element={<Registerform />} />
        <Route exact path='/logIn' element={<Loginform />} />
        <Route exact path='/TermsofUse' element={<TermsofUse />} />
        <Route exact path='/Privacypolicy' element={<Privacypolicy />} />
        <Route exact path='/Besafeonline' element={<Besafeonline />} />
        <Route exact path='/Customersupport' element={<Customersupport />} />
      </Routes>
      <Footermain />
    </div>
  );
}

export default App;
