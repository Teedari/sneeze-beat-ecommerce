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
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={urls.homepage} element={<Homepage />} />
        <Route path={urls.signin} element={<SignIn />} />
        <Route path={urls.signup} element={<SignUp />} />
        <Route path={urls.contact} element={<ContactUs />} />
        <Route path={urls.beat} element={<BeatPage />} />
        <Route path={urls.beat_detail} element={<BeatDetail />} />
        <Route path={urls.checkout} element={<Checkout />} />
        <Route index path={urls.dashboard} element={<Dashboard />} />
        <Route path={urls.genre} element={<Genre />} />
        <Route path={urls.dashboard_beat_create} element={<Beat />} />
        <Route path={urls.dashboard_beat_list} element={<ListBeats />} />
        <Route path={urls.dashboard_beat_update} element={<BeatUpdate />} />
        <Route path={urls.dashboard_messages} element={<Messages />} />
        <Route path={urls.dashboard_users} element={<Users />} />
        <Route path={urls.dashboard_license} element={<License />} />
        <Route path={urls.dashboard_settings} element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
