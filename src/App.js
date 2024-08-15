import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login/Login';
import Dashboarde from './admin/Dashboard';
import DashbaordP from './prof/DashbaordP';
import DashbaordE from './etudiant/DashbaordE';
import Filiere from './admin/Filiere';
import Absence from './admin/Absence';
import Candidature from './admin/Candidature';
import RapportProf from './prof/RapportProf';
import RapportA from './admin/RapportA';
import AjouterCandidature from './admin/GrudCandidature/AjouterCandidature';
import TestApi from './TestApi';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/test" element={<TestApi />} />
        <Route path="/admin/dashboard" element={<Dashboarde />} />
        <Route path="/admin/Filiere" element={<Filiere />} />
        <Route path="/admin/Absence" element={<Absence />} />
        <Route path="/admin/Candidature" element={<Candidature />} />
        <Route path="/admin/rapport" element={<RapportA />} />
        <Route path="/admin/Candidature/ajouter" element={<AjouterCandidature />} />
        <Route path="/prof/dashboard" element={<DashbaordP />} />
        <Route path="/prof/dashboard/message" element={<RapportProf />} />
        <Route path="/etudiant/dashboard/:id" element={<DashbaordE />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
