import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Guidelines from './pages/guildlines/Guidelines';
import DoctorSignin from './pages/doctorSignin/DoctorSignin';
import DoctorSignup from './pages/doctorSignup/DoctorSignup';
import PatientRegister from './pages/patientRegister/PatientRegister';
import PatientInfo from './pages/patientInfo/PatientInfo';
import CreateReport from './pages/createReport/CreateReport';
import Reports from './pages/reports/Reports';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/guidelines" element={<Guidelines />} />
        <Route exact path="/patient/register" element={<PatientRegister/>}/>
        <Route exact path="/doctor/register" element={<DoctorSignup />} />
        <Route exact path="/doctor/login" element={<DoctorSignin />} />
        <Route exact path="/patient/:id" element={<PatientInfo/>}/>
        <Route exact path="/patient/:id/create_report" element={<CreateReport/>}/>
        <Route exact path="/allReports" element={<Reports/>}/>
        <Route exact path="/reports/:status" element={<Reports/>}/>
        <Route exact path="/reports/:phone/:nameOfPatient" element={<Reports/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
