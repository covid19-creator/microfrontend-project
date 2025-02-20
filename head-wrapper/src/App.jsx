import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button } from "../shared-components";

const ChatApp = lazy(() => import("chat/ChatApp"));
const EmailApp = lazy(() => import("email/EmailApp"));

function App() {
  return (
    <Router>
      <div>
        <h1>Host Application</h1>
        <Button onClick={() => alert('Clicked!')}>Click Me</Button>
        <nav>
          <Link to="/chat">Chat</Link> | <Link to="/email">Email</Link>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/chat" element={<ChatApp />} />
            <Route path="/email" element={<EmailApp />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
