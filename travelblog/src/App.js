import TopBar from "./components/topbar/TopBar";
import Home from "./pages/homepages/Home";
import SinglePost from "./components/singleposts/SinglePost";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  let user = false;
  return (
    <div className="App">
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Home />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </div>
  );
}

export default App;
