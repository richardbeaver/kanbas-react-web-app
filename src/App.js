import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Labs from "./Labs";
import Kanbas from "./Labs/Kanbas";
import HelloWorld from "./Labs/a3/HelloWorld";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Labs" />} />
        <Route path="/hello" element={<HelloWorld />} />
        <Route path="/Labs/*" element={<Labs />} />
        <Route path="Kanbas/*" element={<Kanbas />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
