import "../styles/global.css"; // Import global styles

const Home = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <h1>Micro-Frontend Hub</h1>
      </nav>

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
