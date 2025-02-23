<<<<<<< HEAD
import { Button } from 'head_wrapper/shared-components';


const EmailApp = () => {
  return (
    <div>
      <h2>Email Micro-Frontend</h2>
      <p>Welcome to the email application!</p>
      <Button onClick={() => alert('Chat Button Clicked!')}>Email Button</Button>
=======
// Import shared components from the design system
import { Button, Input, Card, Avatar } from 'head_wrapper/shared-components'; 
import { useState } from 'react';
import useGlobalStore from "head_wrapper/globalStore";

const EmailApp = () => {
  const [emails, setEmails] = useState([
    {
      id: 1,
      subject: 'Welcome to the Email App',
      sender: 'admin@example.com',
      timestamp: new Date(),
      body: 'Thank you for using our email application. We hope you enjoy the experience!',
    },
    {
      id: 2,
      subject: 'Meeting Reminder',
      sender: 'manager@example.com',
      timestamp: new Date(),
      body: 'Just a reminder that we have a team meeting tomorrow at 10 AM.',
    },
  ]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [composeEmail, setComposeEmail] = useState(false);
  const [newEmail, setNewEmail] = useState({ to: '', subject: '', body: '' });
  const [email, setEmail] = useState("");
  const { setNotification } = useGlobalStore(); // Use Zustand store

  const sendEmail = () => {
    if (!email.trim()) return;

    window.dispatchEvent(new Event("emailSent"));

    // Update Zustand store
    setNotification("New email sent!");

    setEmail("");
  };

  const handleViewEmail = (email) => {
    setSelectedEmail(email);
  };

  const handleComposeEmail = () => {
    setComposeEmail(true);
    setSelectedEmail(null);
  };

  const handleSendEmail = () => {
    if (newEmail.to && newEmail.subject && newEmail.body) {
      const sentEmail = {
        id: emails.length + 1,
        subject: newEmail.subject,
        sender: 'user@example.com',
        timestamp: new Date(),
        body: newEmail.body,
      };
      setEmails([...emails, sentEmail]);
      sendEmail();
      setNewEmail({ to: '', subject: '', body: '' });
      setComposeEmail(false);
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="container"> {/* Use design system container */}
      <Card className="section"> {/* Use design system card and spacing */}
        <h2 className="heading">Email Micro-Frontend</h2> {/* Use design system typography */}
        <p className="text">Welcome to the email application!</p> {/* Use design system typography */}

        {/* Compose Email Button */}
        <Button onClick={handleComposeEmail} className="button">Compose Email</Button> {/* Use design system button */}

        {/* Compose Email Form */}
        {composeEmail && (
          <Card className="section"> {/* Use design system card and spacing */}
            <Input
              type="text"
              placeholder="To"
              value={newEmail.to}
              onChange={(e) => setNewEmail({ ...newEmail, to: e.target.value })}
              className="input" 
            />
            <Input
              type="text"
              placeholder="Subject"
              value={newEmail.subject}
              onChange={(e) => setNewEmail({ ...newEmail, subject: e.target.value })}
              className="input" 
            />
            <Input
              type="text"
              placeholder="Body"
              value={newEmail.body}
              onChange={(e) => setNewEmail({ ...newEmail, body: e.target.value })}
              className="input" 
            />
            <Button onClick={handleSendEmail} className="button">Send</Button> {/* Use design system button */}
          </Card>
        )}

        {/* Email List */}
        <div className="email-list"> {/* Custom class for email list */}
          {emails.map((email) => (
            <Card
              key={email.id}
              onClick={() => handleViewEmail(email)}
              className="email-item flex" 
            >
              <Avatar src="https://via.placeholder.com/40" alt="Sender" className="avatar" /> 
              <div style={{ marginLeft: 'var(--spacing-md)' }}>
                <div className="email-sender" style={{ fontWeight: 'var(--font-weight-bold)' }}>{email.sender}</div> 
                <div className="email-subject">{email.subject}</div> 
                <div className="email-timestamp" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--secondary-color)' }}>
                  {new Date(email.timestamp).toLocaleTimeString()} 
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Selected Email Details */}
        {selectedEmail && (
          <Card className="section"> {/* Use design system card and spacing */}
            <div className="email-subject" style={{ fontWeight: 'var(--font-weight-bold)' }}>{selectedEmail.subject}</div> {/* Use typography token */}
            <div className="email-sender">From: {selectedEmail.sender}</div> {/* Custom class */}
            <div className="email-body">{selectedEmail.body}</div> {/* Custom class */}
            <div className="email-timestamp" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--secondary-color)' }}>
              {new Date(selectedEmail.timestamp).toLocaleTimeString()} {/* Use typography and color tokens */}
            </div>
          </Card>
        )}
      </Card>
>>>>>>> 599cf48 (added zustand and window events)
    </div>
  );
};

<<<<<<< HEAD
export default EmailApp;
=======
export default EmailApp;
>>>>>>> 599cf48 (added zustand and window events)
