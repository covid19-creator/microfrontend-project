<<<<<<< HEAD

const ChatApp = () => {
  return (
    <div>
      <h2>Chat Micro-Frontend</h2>
      <p>Welcome to the chat application!</p>
      {/* <Button onClick={() => alert('Chat Button Clicked!')}>Chat Button</Button> */}
=======
import { Button, Input, Card, Avatar } from 'head_wrapper/shared-components'; 
import { useState } from 'react';
import useGlobalStore from "head_wrapper/globalStore"; // Import Zustand store from head-wrapper


const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState("");
  const { setNotification } = useGlobalStore(); // Use Zustand store

  const sendMessage = () => {
    if (!message.trim()) return;
    
    // Update Zustand store
    setNotification("New message received!");
    window.dispatchEvent(new Event("chatMessage")); // Notify host app

    setMessage("");
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: inputValue }]);
      sendMessage();
      setInputValue('');
    }
  };

  return (
    <div className="container"> {/* Use design system container */}
      <Card className="section"> {/* Use design system card and spacing */}
        <h2 className="heading">Chat Micro-Frontend</h2> {/* Use design system typography */}
        <p className="text">Welcome to the chat application!</p> {/* Use design system typography */}

        {/* Chat Message List */}
        <div className="message-list"> {/* Custom class for message list */}
          {messages.map((message) => (
            <div key={message.id} className="message-item flex"> {/* Use flex utility */}
              <Avatar src="https://via.placeholder.com/40" alt="User" className="avatar" /> {/* Use shared Avatar */}
              <div style={{ marginLeft: 'var(--spacing-md)' }}> {/* Use spacing token */}
                <div className="message-text">{message.text}</div> {/* Custom class */}
                <div className="message-timestamp" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--secondary-color)' }}>
                  {new Date().toLocaleTimeString()} {/* Use typography and color tokens */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input and Send Button */}
        <div className="flex" style={{ gap: 'var(--spacing-md)' }}> {/* Use flex utility and spacing token */}
          <Input
            type="text"
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="input" 
          />
          <Button onClick={handleSendMessage} className="button">Send</Button> 
        </div>
      </Card>
>>>>>>> 599cf48 (added zustand and window events)
    </div>
  );
};

<<<<<<< HEAD
export default ChatApp;
=======
export default ChatApp;
>>>>>>> 599cf48 (added zustand and window events)
