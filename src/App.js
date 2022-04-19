import "./index.css";
import "antd/dist/antd.css";
import "./App.css";
import Homepage from "./pages/user";
import urls from "./utils/routes/page.routes";
import SignIn from "./pages/common/signin";
import SignUp from "./pages/common/signup";
import ContactUs from "./pages/user/Contact";
import BeatPage from "./pages/user/Beat";
import BeatDetail from "./pages/user/BeatDetail";
import Checkout from "./pages/user/Checkout";
import Dashboard from "./pages/admin";
import Genre from "./pages/admin/Genre";
import Beat from "./pages/admin/Beat";
import ListBeats from "./pages/admin/Beat/list.beat";
import Users from "./pages/admin/Users";
import Messages from "./pages/admin/Messages";
import Settings from "./pages/admin/settings";
import BeatUpdate from "./pages/admin/Beat/update.beat";
import License from "./pages/admin/License";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Page404 from "./pages/common/components/Page404";
import LoginRequiredRoutes from "./utils/middlewares/login_requried.mw";
import AdminOnlyRoutes from "./utils/middlewares/admin_only.mw";
import UserProfile from "./models/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
          <Route path={urls[404]} element={Page404} />
          <Route path={urls.signin} element={<SignIn />} />
          <Route path={urls.signup} element={<SignUp />} />
          <Route path={urls.contact} element={<ContactUs />} />
          <Route path={urls.beat} element={<BeatPage />} />
          <Route path={urls.beat_detail} element={<BeatDetail />} />
          <Route path='/checkout/*' element={<LoginRequiredRoutes /> } />
          {/* <Route path={urls.checkout} element={<Checkout />} /> */}
          <Route index path={'/dashboard/*'} element={<AdminOnlyRoutes allowered_users={[UserProfile.ADMIN_ROLE, UserProfile.USER_ROLE]} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
