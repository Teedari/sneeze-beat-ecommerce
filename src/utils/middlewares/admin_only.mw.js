import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import Dashboard from "../../pages/admin"
import Genre from "../../pages/admin/Genre"
import PersistentStorage from "../persistent_storage/storage.persistent"
import urls from "../routes/page.routes"


const AdminOnlyRoutes = ({allowered_users=[]}) => {
  const location = useLocation()
  const user_role = PersistentStorage.getUserRole()
  if(!PersistentStorage.getUserHasLoggedIn()){
   return <Navigate to={"/login?redirect=".concat(location.pathname.slice(1))} state={{ from: "sdf" }} />
  }
  if(allowered_users.includes(user_role)){
    return <Routes>
      <Route index element={<Dashboard />} />
      <Route path={'genre'} element={<Genre />} />
    </Routes>
  }

  return <h2>PAGE NOT FOUND</h2>
}

export default AdminOnlyRoutes