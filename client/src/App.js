import { Route, Routes } from "react-router-dom";
import { path } from "./utils/constants";
import { DetailPost, Home, HomePage, Login, RentalApartment, RentalHouse, RentalRoom, RentalSpace } from "./pages/public";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./components/common/Modal";
import { useEffect } from "react";
import { getCategories } from "./store/app/asyncActions";
import { getPosts, getPostsLimit } from "./store/post/asyncActions";
import { getPrices } from "./store/prices/asyncActions";

function App() {

  const dispatch = useDispatch()
  const { isShowModal, modalChildren } = useSelector(state => state.app)
  useEffect(() => {
    dispatch(getCategories())
  }
    , [])
  return (
    <div className="w-screen bg-primary">
      {isShowModal && <Modal>{modalChildren}</Modal>}
      <Routes>
        <Route path={path.HOME} element={<Home />}>
        <Route path='*' element={<HomePage />} />
          <Route path={path.HOME__PAGE} element={<HomePage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.NHA_CO_THUE} element={<RentalHouse />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<RentalApartment />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<RentalRoom />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<RentalSpace />} />
          <Route path={path.DETAIL_POST__TITLE__POSTID} element={<DetailPost />} />
          <Route path={`${path.DETAIL_POST}/*`} element={<DetailPost />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
