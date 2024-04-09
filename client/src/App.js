import { Route, Routes } from "react-router-dom";
import { path } from "./utils/constants";
import { Home, HomePage, Login, RentalApartment, RentalHouse, RentalRoom, RentalSpace } from "./pages/public";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./components/common/Modal";
import { useEffect } from "react";
import { getCategories } from "./store/app/asyncActions";

function App() {

  const dispatch = useDispatch()
  const { isShowModal, modalChildren } = useSelector(state => state.app)
  useEffect(() => {
    dispatch(getCategories())
  }
    , [])
  return (
    <div className="h-screen w-screen bg-primary">
      {isShowModal && <Modal>{modalChildren}</Modal>}
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path='/' element={<HomePage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.NHA_CO_THUE} element={<RentalHouse />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<RentalApartment />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<RentalRoom />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<RentalSpace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
