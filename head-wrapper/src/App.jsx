<<<<<<< HEAD
import { lazy, Suspense } from "react";
=======
import { lazy, Suspense, useEffect } from "react";
>>>>>>> 599cf48 (added zustand and window events)
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Home from "./pages/Home";

const ChatApp = lazy(() => import("chat/ChatApp"));
const EmailApp = lazy(() => import("email/EmailApp"));

function App() {
<<<<<<< HEAD
  return (
    <Router>
=======
  
  return (
    <Router> 
>>>>>>> 599cf48 (added zustand and window events)
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/chat" element={<h2><ChatApp/></h2>} />
        <Route path="/email" element={<h2><EmailApp/></h2>} />
          </Routes>
        </Suspense>
    </Router>
  );
}

export default App;
