import { Route, Routes } from "react-router-dom";
import { path } from "./utils/constants";
import { Home, Login, Public } from "./pages/public";
import { useSelector } from "react-redux";
import Modal from "./components/common/Modal";

function App() {

  const {isShowModal, modalChildren} = useSelector(state => state.app)
  return (
    <div className="h-screen w-screen bg-primary">
      {isShowModal && <Modal>{modalChildren}</Modal>}
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={path.LOGIN} element={<Login />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
