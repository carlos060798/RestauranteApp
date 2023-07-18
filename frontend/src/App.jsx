import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Registro from './Pages/ReservaHome';
import LoginSection from './Pages/Login';
import Menu from './Componets/generales/Navbar';
import LayautADmin from './Componets/Admin/LayautAdmin';

function App() {
  return (<>

  <Router>
    <Menu/>
     <Routes>
      <Route path="/" element={<Registro/>} />
      <Route path="/login" element={<LoginSection/>} /> 
      <Route path="/admin" element={<LayautADmin/>} />
    </Routes>
  </Router>,

  </>  )
}

export default App ;