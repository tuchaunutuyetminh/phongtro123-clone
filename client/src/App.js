import { Route, Routes } from "react-router-dom";
import { path } from "./utils/constants";
import { DetailPost, Home, HomePage, Login, Rental } from "./pages/public";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./components/common/Modal";
import { useEffect } from "react";
import { getCategories } from "./store/app/asyncActions";
import { getPosts, getPostsLimit } from "./store/post/asyncActions";
import { getPrices } from "./store/prices/asyncActions";
import { getAreas } from "./store/areas/asyncActions";
import { getProvinces } from "./store/province/asyncActions";

function App() {

  const dispatch = useDispatch()
  const { isShowModal, modalChildren } = useSelector(state => state.app)
  useEffect(() => {
    dispatch(getCategories())
    dispatch(getPrices())
    dispatch(getAreas())
    dispatch(getProvinces())

  }
    ,[])
  return (
    <div className="w-screen bg-primary">
      {isShowModal && <Modal>{modalChildren}</Modal>}
      <Routes>
        <Route path={path.HOME} element={<Home />}>
        <Route path='*' element={<HomePage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.NHA_CO_THUE} element={<Rental />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<Rental />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<Rental />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<Rental />} />
          <Route path={path.DETAIL_POST__TITLE__POSTID} element={<DetailPost />} />
          <Route path={`${path.DETAIL_POST}/*`} element={<DetailPost />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
