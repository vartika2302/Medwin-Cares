import "./App.css";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Guidelines from "./pages/guildlines/Guidelines";
import DoctorSignin from "./pages/doctorSignin/DoctorSignin";
import DoctorSignup from "./pages/doctorSignup/DoctorSignup";
import PatientRegister from "./pages/patientRegister/PatientRegister";
import PatientInfo from "./pages/patientInfo/PatientInfo";
import CreateReport from "./pages/createReport/CreateReport";
import Reports from "./pages/reports/Reports";
import { useContext } from "react";
import { Context } from "./context/Context";
import Setting from "./pages/setting/Setting";

function App() {
  const { doctor } = useContext(Context);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/guidelines" element={<Guidelines />} />
        <Route
          exact
          path="/patient/register"
          element={doctor ? <PatientRegister /> : <DoctorSignup />}
        />
        <Route
          exact
          path="/doctor/register"
          element={doctor ? <Home /> : <DoctorSignup />}
        />
        <Route
          exact
          path="/doctor/login"
          element={doctor ? <Home /> : <DoctorSignin />}
        />
        <Route
          exact
          path="/patients/patientInfo/:id"
          element={doctor ? <PatientInfo /> : <DoctorSignin />}
        />
        <Route
          exact
          path="/patient/:id/create_report"
          element={doctor ? <CreateReport /> : <DoctorSignin />}
        />
        <Route
          exact
          path="/allReports"
          element={doctor ? <Reports /> : <DoctorSignin />}
        />
        <Route
          exact
          path="/reports/:status"
          element={doctor ? <Reports /> : <DoctorSignin />}
        />
        <Route
          exact
          path="/reports/:phone/:nameOfPatient"
          element={doctor?<Reports />:<DoctorSignin/>}
        />
        <Route
          exact
          path="/settings/:id"
          element={doctor ? <Setting /> : <Navigate to="/doctor/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
