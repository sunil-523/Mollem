import Login from "./components/login/Login";
import Signup from "./components/signUp/Signup";
import { Routes, Route, useLocation } from "react-router-dom";
import UserAdmin from "./components/userAdmin/UserAdmin";
import Header from "./components/header/Header";
import Topiwala from "./components/topiwala/Topiwala";
import Regulation from "./components/regulation/Regulation";
import Database from "./components/database/Database";
import Templates from "./components/template/Templates";
import PreparationPhase from "./components/projectPhase/preparation/PreparationPhase";
import InitialPhase from "./components/projectPhase/initialPhase/InitialPhase";
import Execution from "./components/projectPhase/execution/Execution";
import Close from "./components/projectPhase/clostPhase/Close";
import ProjectManagement from "./components/projectManage/projectManagement";
import SingleProject from "./components/projectManage/NewProject";
import { I18nextProvider } from 'react-i18next';
import i18n from './Languages/i18n'; 
import EngineeringPractices from "./components/EngineeringPractices/EngineeringPractices";
import HeaderProjectM from "./components/ProjectManagement/HeaderProjectM";
import UserTask from "./components/ProjectManagement/UserTask";
import TaskCreate from "./components/ProjectManagement/TaskCreate";
import Task from "./components/ProjectManagement/Task";
function App() {
  const location = useLocation();
  return (
    <div>
      <I18nextProvider i18n={i18n}>
      {/* {istaskPage ? (<HeaderProjectM /> ) : (<Header />) } */}
      {location.pathname==='/task'||location.pathname==='/taskCreate'|| location.pathname==='/userTask'?(<HeaderProjectM /> ) : (<Header />)  }
      {/* <HeaderProjectM /> */}
      <Routes>
        <Route index element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/useradmin" element={<UserAdmin />} />
        <Route path="/topiwala" element={<Topiwala />} />
        <Route path="/reg" element={<Regulation />} />
        <Route path="/ep" element={<EngineeringPractices />} />
        <Route path="/data" element={<Database />} />
        <Route path="/template" element={<Templates />} />
        <Route path="/preparation" element={<PreparationPhase />} />
        <Route path="/initiatingphase" element={<InitialPhase />} />
        <Route path="/execution" element={<Execution />} />
        <Route path="/close" element={<Close />} />
        <Route path="/ProjectManagement" element={<ProjectManagement />} />
        <Route path="/newProject" element={<SingleProject />} />
        <Route path="/userTask" element={<UserTask />} />
        <Route path="/taskCreate" element={<TaskCreate />} />
        <Route path="/task" element={<Task />} />
      </Routes>
      </I18nextProvider>
    </div>
  );
}

export default App;
