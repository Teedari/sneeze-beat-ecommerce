import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import Checkout from "../../pages/user/Checkout"
import PersistentStorage from "../persistent_storage/storage.persistent"

const LoginRequiredRoutes = ({children}) => {
  const location = useLocation()
  const validator = PersistentStorage.getUserHasLoggedIn()
  return validator ?
  <Routes>
    <Route index element={<Checkout />} />
  </Routes>
  :  <Navigate to={"/login?redirect=".concat(location.pathname.slice(1))} state={{ from: "sdf" }} />
}


export default  LoginRequiredRoutes