<<<<<<< HEAD
import "../styles/global.css"; // Import global styles

const Home = () => {
=======
import "../styles/global.css";
import { useEffect } from "react";
import useGlobalStore from "../store/globalStore";

const Home = () => {

  const { notification, setNotification } = useGlobalStore();

  useEffect(() => {
    const handleChatMessage = () => setNotification("New message received!");
    const handleEmailSent = () => setNotification("New email sent!");

    window.addEventListener(" ", handleChatMessage);
    window.addEventListener("emailSent", handleEmailSent);

    return () => {
      window.removeEventListener("chatMessage", handleChatMessage);
      window.removeEventListener("emailSent", handleEmailSent);
    };
  }, [setNotification]);

>>>>>>> 599cf48 (added zustand and window events)
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <h1>Micro-Frontend Hub</h1>
      </nav>

<<<<<<< HEAD
=======
      {notification && (
        <div className={`notification ${!notification ? "hide" : ""}`}>
          {notification}
        </div>
      )}

>>>>>>> 599cf48 (added zustand and window events)
      {/* Hero Section */}
      <header className="hero">
        <h2>Welcome to the Micro-Frontend Dashboard</h2>
        <p>Seamlessly integrate and manage your micro-apps.</p>
      </header>

      {/* Micro-Frontend Links */}
      <section className="grid">
        <div className="card">
          <h3>Chat App</h3>
          <p>Access real-time chat functionalities.</p>
          <a href="/chat" className="button">Go to Chat</a>
        </div>

        <div className="card">
          <h3>Email App</h3>
          <p>Manage and send emails efficiently.</p>
          <a href="/email" className="button">Go to Email</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
