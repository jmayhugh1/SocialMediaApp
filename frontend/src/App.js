import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "../src/store/store.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import LoginPage from "./components/LoginPage.js";
import Profile from "./components/Profile.js";
import Header from "./components/Header.js";

function App() {
  return (
    <Provider store={store}>

      
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
