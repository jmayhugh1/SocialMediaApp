import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "../src/store/store.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import LoginPage from "./components/LoginPage.js";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
