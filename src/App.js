import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from "./components/Sidebar/Sidebar";
import Equipamento from "./pages/Equipamento";
import CadastrarEquipamento from "./pages/CadastrarEquipamento/CadastrarEquipamento";
import Navbar from "./components/Navbar/Navbar";
import FormEvaporadora from "./components/form-evaporadora/FormEvaporadora";
import FormCondensadora from "./components/form-condensadora/FormCondensadora";
import FormEquipamento from "./components/form-equipamento/FormEquipamento";
import CadastroManutencao from "./pages/CadastroManutencao/CadastroManutencao";
function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/equipamentos" element={<Home/>}/>
        <Route path="/cadastro/equipamento" element={<CadastrarEquipamento/>}/>
        <Route path="/cadastro/manutencao" element={<CadastroManutencao/>}/>
        <Route path="/cadastro/equipamentos/form-evaporadora" element={<FormEvaporadora/>}/>
        <Route path="/cadastro/equipamentos/form-condesadora" element={<FormCondensadora/>}/>
        <Route path="/cadastro/equipamentos/form-equipamento" element={<FormEquipamento/>}/>
        <Route path="/equipamentos/:id" element={<Equipamento/>}/>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
