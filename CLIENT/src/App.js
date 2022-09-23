import "./App.css";
import Layout from "./widgets/Layout";
import LayoutAdm from "./widgets/LayoutAdmin";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import AdminHome from "./pages/AdminHome";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import AddFilmList from "./pages/AdminList";
// import Profile from './pages/Profile';
import Payment from "./pages/Payment";
// import VideoDetail from './pages/VideoDetail';
import IncomingTransactions from "./pages/IncomingTransactions";
import AddFilm from "./pages/AddFilmForm";
import Profile from "./pages/Profile";
import VideoDetail from "./pages/VideoDetail";
import VideoDetailAdm from "./pages/VideoDetailAdm";
import { API, setAuthToken } from "./config/api";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { useEffect } from "react";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }, [state]);
  return (
    <Routes>
      <>
        <Route />
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/movies"
          element={
            <Layout>
              <Movies />
            </Layout>
          }
        />

        <Route
          path="/tvshows"
          element={
            <Layout>
              <TvShows />
            </Layout>
          }
        />

        <Route
          path="/payment"
          element={
            <Layout>
              <Payment />
            </Layout>
          }
        />

        <Route
          path="/admin"
          element={
            <LayoutAdm>
              <AdminHome />
            </LayoutAdm>
          }
        />

        <Route
          path="/transaction"
          element={
            <LayoutAdm>
              <IncomingTransactions />
            </LayoutAdm>
          }
        />

        <Route
          path="/add-film-list"
          element={
            <LayoutAdm>
              <AddFilmList />
            </LayoutAdm>
          }
        />

        <Route
          path="/add-film"
          element={
            <LayoutAdm>
              <AddFilm />
            </LayoutAdm>
          }
        />

        <Route
          path="/video"
          element={
            <Layout>
              <VideoDetail />
            </Layout>
          }
        />

        <Route
          path="/video-adm"
          element={
            <LayoutAdm>
              <VideoDetailAdm />
            </LayoutAdm>
          }
        />

        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />

        {/*   
    
  
       
  
        <Route path='/payment' element={
          <Layout>
            <Payment />
          </Layout>
        }/> */}
      </>
    </Routes>
  );
}

export default App;
