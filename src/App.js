import { BrowserRouter } from "react-router-dom";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Pages from "./pages/Pages";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;
