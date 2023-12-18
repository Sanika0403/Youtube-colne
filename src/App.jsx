import { Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo"

function App() {
  return (
    <>
      <Head />
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<MainContainer />} />
          <Route path="/watch" element={<WatchPage />} />
          <Route path="/demo" element={<Demo/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
