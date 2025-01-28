import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// function App() {
//   const [isDark, setIsDark] = useState(true);

//   const toggleClass = () => {
//       setIsDark(!isDark);
//   };

//   return (
//       <button 
//           className={`btn ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`} 
//           onClick={toggleClass}
//       >
//           Cambiar Tema
//       </button>
//   );
// }

// export default App;