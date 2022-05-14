
import "./App.css";
import { AuthContextProvider } from "./Components/context/AuthContext";
import Mainroutes from './Components/Routes/MainRoutes';

function Main() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Mainroutes />
      </AuthContextProvider>
    </div>
  );
}
export default Main;
