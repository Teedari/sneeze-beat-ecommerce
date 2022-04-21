import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import Dashboard from "../../pages/admin"
import Beat from "../../pages/admin/Beat"
import ListBeats from "../../pages/admin/Beat/list.beat"
import BeatUpdate from "../../pages/admin/Beat/update.beat"
import Genre from "../../pages/admin/Genre"
import License from "../../pages/admin/License"
import Messages from "../../pages/admin/Messages"
import Settings from "../../pages/admin/settings"
import Users from "../../pages/admin/Users"
import UserAdminCreate from "../../pages/admin/Users/index.create_admin"
import PersistentStorage from "../persistent_storage/storage.persistent"


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
      <Route path={'beat'}>
        <Route index element={<Beat />} />
        <Route path={'list'} element={<ListBeats />} />
        <Route path={'update/:ID'} element={<BeatUpdate />} />
      </Route>
      <Route path={'messages'} element={<Messages />} />
      <Route path={'user'} >
        <Route index element={<Users />} />
        <Route path={'create/admin'} element={<UserAdminCreate />} />
      </Route>
      <Route path={'license'} element={<License />} />
      <Route path={'settings'} element={<Settings />} />
    </Routes>
  }

  return <h2>PAGE NOT FOUND</h2>
}

export default AdminOnlyRoutes