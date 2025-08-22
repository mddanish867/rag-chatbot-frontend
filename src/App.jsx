
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainChat from "./services/MainChat";
import PaperBrainLanding from "./pages/PaperBrainLanding";

function App() {
  

  

  return (
   <>
    <Router>   

      <Routes>
        <Route path="/" element={<PaperBrainLanding/>} />  
        <Route path="/chat" element={<MainChat/>} />       
      </Routes>
    </Router>
   
   
   </>
  );
}

export default App;