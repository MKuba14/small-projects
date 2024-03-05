import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import Calculator from "./features/calculator/Calculator";
import Passwords from "./features/passwords/Passwords";
import AppLayout from "./ui/AppLayout";
import Home from "./Home";
import Weather from "./features/weather/Weather";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="passwords" element={<Passwords />} />
            <Route path="weather" element={<Weather />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
